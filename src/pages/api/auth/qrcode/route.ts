import QRCode from "qrcode";
import speakeasy from "speakeasy";
import { Response } from 'node-fetch'; // Import Response from fetch library

export async function GET(): Promise<Response> {
  const secret = speakeasy.generateSecret({
    name: "Next.js + Google authenticator",
  });
  const data = await QRCode.toDataURL(secret.otpauth_url as string);
  console.log(data, "data qury")
  return Response.json({
    data,
    secret: secret.base32,
  });
}
