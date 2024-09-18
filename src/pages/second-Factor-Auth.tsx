"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import speakeasy from "speakeasy";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { useDispatch, } from "react-redux";
import { Twofa } from "@/services/two2fa";
import { getTwofa } from "@/services/two2fa"
import { setLoginStatus } from "@/redux/slices";
const Button = (props: any) => (
  <button
    className="p-2 rounded-md border border-solid hover:bg-white hover:text-black transition-colors duration-300"
    type="button"
    {...props}
  />
);

export default function SecondFactorAuth() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [_2faStatus, set2FAStatus] = useState<
    "enabled" | "disabled" | "initializing"
  >("disabled");
  const [qrData, setQRData] = useState<string>();
  const [qrSecret, setQRSecret] = useState<string>();
  const [userToken, setUserToken] = useState<string>();
  const [errorText, setErrorText] = useState<string>();
  const [getLocalstorageData, setGetLocalstorageData] = useState<any | null>()
  const [twofaStatus, setTwoFaStatus] = useState()
  console.log({ twofaStatus })
  useEffect(() => {
    let data = localStorage.getItem("userSignInData")
    if (data) {
      setGetLocalstorageData(JSON.parse(data))
    }
  }, [])

  const user_id = getLocalstorageData?.user?._id;

  const initialize2FA = async () => {
    if (twofaStatus) {
      // If 2FA is already enabled for the user, do not generate a new QR code
      return;
    }
    const secret = speakeasy.generateSecret({
      name: "Next.js + Google authenticator",
    });
    const dataUrl = await QRCode.toDataURL(secret.otpauth_url || "");
    setQRData(dataUrl);
    setQRSecret(secret.base32)
  };
  useEffect(() => {
    const FetchData = async () => {
      console.log("run")
      // const data = await signinApi()
      setTwoFaStatus(getLocalstorageData?.user?.twofa_enable)
      console.log(twofaStatus, "insde use effect")
    }
    FetchData()
  }, [])

  const verifyToken = async () => {
    if (!qrData || !qrSecret || !userToken) {
      setErrorText("Invalid QR code data or token.");
      return;
    }
    try {
      const response = await fetch("/api/verify2fa", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: qrSecret,
          token: userToken,
        }),
      });

      const data = await response.json();

      if (data.verified) {
        dispatch(setLoginStatus(true));
        toast.success('Login successfully', {
          position: 'top-right',
          autoClose: 3000, // 3 seconds
        });
        let dataPayload;
        if (!twofaStatus) {
          dataPayload = {
            user_id: user_id,
            twofa_enable: "true",
          };
        }
        router.push("/")
        set2FAStatus("enabled");
        setErrorText("");
      } else {
        setErrorText("Invalid token. Please try again.");
      }
    } catch (error) {
      setErrorText("Error verifying token.");
      console.error(error);
    }
  };

  // const verifyToken = () => {
  //   if (!qrData || !qrSecret || !userToken) {
  //     setErrorText("Invalid QR code data or token.");
  //     return;
  //   }

  //   try {
  //     const verified = speakeasy.totp.verify({
  //       secret: qrSecret as string,
  //       encoding: "base32",
  //       token: userToken as string,
  //     });
  //     console.log(qrSecret, "(qrSecret)")
  //     console.log(userToken, "((userToken))")
  //     console.log({ verified })
  //     if (verified) {
  //       setErrorText("");
  //       // Perform actions on successful verification
  //     } else {
  //       setErrorText("Invalid token. Please try again.");
  //       // Perform actions on failed verification
  //     }
  //   } catch (error) {
  //     setErrorText("Error verifying token.");
  //     console.error(error);
  //   }
  // };

  return (
    <main className="flex flex-col gap-4 items-center p-4 md:p-24">
      <div className="flex gap-1">
        <span>2FA is</span>
        <span
          className={
            _2faStatus === "enabled" ? "text-green-500" : "text-red-500"
          }
        >
          {_2faStatus === "enabled" ? "enable" : "disabled"}
        </span>
      </div>
      {_2faStatus !== "enabled" && qrData && (
        <div className="flex flex-col gap-4">
          {twofaStatus ? "" : <div className="flex flex-col gap-2">
            <span>1. Scan the QR code with Google Authenticator:</span>
            <img src={qrData} alt="2FA QR Code" />
          </div>}
          <div className="flex flex-col gap-2">
            <span>2. Enter the 6-digits code from Google Authenticator:</span>
            <input
              type="text"
              className="rounded-md text-black p-2 border border-solid text-center"
              maxLength={6}
              onChange={(e) => setUserToken(e.target.value)}
              value={userToken}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>3. Click Verify:</span>
            {/* <Button
              onClick={async () => {
                const response = await fetch(
                  `/api/auth/verify?secret=${qrSecret}&token=${userToken}`
                );
                console.log('{ response },', response)
                const data = await response.json();
                console.log({ data })
                if (data.verified) {
                  set2FAStatus("enabled");
                  setErrorText("");
                } else {
                  setUserToken("");
                  setErrorText(
                    "Failed. Please scan the QR code and repeat verification."
                  );
                }
              }}
            >
              Verify
            </Button> */}
            <Button onClick={verifyToken}>Verify</Button>
            {errorText && (
              <span className="text-sm text-center text-red-500">
                {errorText}
              </span>
            )}
          </div>
        </div>
      )}
      {_2faStatus === "disabled" && (
        <Button onClick={initialize2FA}>Enable 2FA</Button>
      )}
    </main>
  );
}
