import type { NextPage } from 'next';
import { useState } from 'react';
import VariantFilledTypePrimary from './variant-filled-type-primary';
import { useRouter } from "next/router";
import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify'
const ListingForm: NextPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const router = useRouter();
  const [buttonText, setButtonText] = React.useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showFailureMessage, setShowFailureMessage] = React.useState(false);
  const handleValidation = (): boolean => {
    let tempErrors: { [key: string]: boolean } = {};
    let isValid: boolean = true;
    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (mobile.length <= 0) {
      tempErrors["mobile"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      try {
        const response = await fetch('api/auth/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` // Use your SendGrid API key
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: email }]
              }
            ],
            from: { email: 'amanthakur@webopstechnologies.com' }, // Replace with your sender email address
            name,
            email,
            mobile,
            content: [
              {
                type: 'text/plain',
                value: mobile
              }
            ]
          })
        });

        if (response.ok) {
          toast.success("Form Submitted Sucessfully", {
            position: 'top-right',
            autoClose: 3000,
          });
          setName("")
          setEmail("")
          setMobile("")
        } else {
          console.error('Failed to send email:', response.statusText);
        }
      } catch (error) {
        toast.error("Form Submitted Sucessfully", {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    };
  }

  return (
    <div className="mt-[24px] flex items-start justify-start gap-[24px] self-stretch rounded-2xl bg-darkblue p-6 text-9xl">
      <div className="flex flex-row items-center justify-start gap-[32px]">
        <div>
          <Image
            className="relative h-[126px] w-[171px] object-cover"
            alt=""
            src="/assets/images/icons/callback.gif"
            width={171}
            height={126}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <b className="relative flex w-[640px] items-center leading-[40px] text-black">
              Not sure which package to pick for?
            </b>
            <div className="relative flex w-[640px] items-center text-base leading-[26px] text-black">
              Talk to our trip experts now to get the best deal
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-wrap flex-row items-start justify-start gap-[22px] text-xs text-text-gray-700">
            <input
              type="text"
              placeholder="Your Name"
              className="relative box-border flex h-10 w-[150px] min-w-[160px] flex-row items-center justify-start rounded-3xl border-0 bg-default-white px-6 py-2 font-medium leading-[16px]"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Email"
              className="relative box-border flex h-10 w-[150px] min-w-[160px] flex-row items-center justify-start rounded-3xl border-0 bg-default-white px-6 py-2 font-medium leading-[16px]"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile"
              className="relative box-border flex h-10 w-[150px] min-w-[160px] flex-row items-center justify-start rounded-3xl border-0 bg-default-white px-6 py-2 font-medium leading-[16px]"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <VariantFilledTypePrimary
              label="Get Callback"
              variantFilledTypePrimaryPosition="unset"
              variantFilledTypePrimaryBorderRadius="25px"
              variantFilledTypePrimaryBackgroundColor="#DD1045"
              variantFilledTypePrimaryJustifyContent="flex-start"
              variantFilledTypePrimaryWidth="unset"
              labelColor="#fff"
              variantFilledTypePrimaryCursor="pointer"
            />
          </form>
        </div>
      </div>

    </div>
  );
};

export default ListingForm;

