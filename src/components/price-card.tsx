/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import VariantFilledTypePrimary from "./variant-filled-type-primary";
import PackageIcon from "./packageIcon";
import { useEffect, useMemo, useRef, useState } from "react";
import { BookingPackage } from "@/services/bookingPackage"
import { Link as ScrollLink } from 'react-scroll';
import { toast } from "react-toastify";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
type PriceCardType = {
  price?: any;
  title?: string;
};

const PriceCard: NextPage<PriceCardType> = ({ price, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [priceValue, setPriceValue] = useState(price)
  const [morePerson, setMorePerson] = useState("")
  const [optionValue, setOptionValue] = useState("1")
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "" });
  const Options = [
    { label: "1 Person", value: "1" },
    { label: "2 Persons", value: "2" },
    { label: "More than 2 Persons", value: "Connect to Host" },
  ]

  const schema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .min(5, "Email must be at least 5 characters long")
      .max(255, "Email must be less than 255 characters"),
    phoneNumber: yup.string().required("Number is Required")
      .min(10, "Number must be at least 10 Digits")
      .max(10, "Number should not be at greater than 10 Digits"),
  })

  const { register, reset, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema)
  })

  const handlePriceValue = useMemo(() => (value: any) => {
    setOptionValue(value)
    if (value == "Connect to Host") {
      setMorePerson(value)
    } else {
      let data = price * value
      setPriceValue(data)
      setMorePerson("");
    }
    setIsDropdownOpen(false)
  }, [price])

  const toogleRotate = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleAddToCart = async (data: any) => {
    try {
      const response = BookingPackage(data)
      setIsModalOpen(false);
      toast.success("Package Booked Sucessfully", {
        position: 'top-right',
        autoClose: 3000,
      });
      reset()
    }
    catch (err) {
      toast.error("Package not Booked", {
        position: 'top-right',
        autoClose: 3000,
      });
    }

  };

  return (
    <div className="rounded-2xl bg-default-white box-border w-3/3 mt-8 flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[20px] font-medium flex items-center w-[235px]">
              Included
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-text-gray-700">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <PackageIcon className="arrow text-dark text-[20px]" groupName="solar:camera-bold" />
                <div className="relative leading-[24px] font-medium">Sightseeing</div>
              </div>
              <div className="relative rounded-[50%] bg-gainsboro-100 w-[3px] h-[3px]" />
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <PackageIcon className="arrow text-dark text-[20px]" groupName="mdi:bed" />
                <div className="relative leading-[24px] font-medium">Hotel</div>
              </div>
              <div className="relative rounded-[50%] bg-gainsboro-100 w-[3px] h-[3px]" />
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <PackageIcon className="arrow text-dark text-[20px]" groupName="mdi:car" />
                <div className="relative leading-[24px] font-medium">Transport</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-text-gray-300 h-px overflow-hidden shrink-0" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-[12.46px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div ref={dropdownRef} onClick={toogleRotate} className="flex-1 cursor-pointer rounded-full bg-default-white [backdrop-filter:blur(3.12px)] box-border h-12 flex flex-row items-center justify-center py-[6.230769157409668px] px-[12.461538314819336px] gap-[6.23px] border-[1px] border-solid border-darkgray">
              <PackageIcon className="arrow text-dark text-[20px] text-mediumblue-100" groupName="solar:user-bold" />
              <div className="relative leading-[18.69px] font-medium">
                {optionValue && optionValue == "Connect to Host" ? `More than 2 Persons` : `Adut x ${optionValue}`}
              </div>
              <button className="bg-white">
                <PackageIcon className={`${isDropdownOpen ? `rotate-180 transform` : ""}  arrow text-dark text-[25px]`} groupName="gridicons:dropdown" />
              </button>
              {isDropdownOpen ? (
                <div
                  className="absolute hide top-9 z-10 mt-0 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <ul className="px-0" role="none">
                    {Options && Options.map((data, index) => (
                      <li key={index} className='list-none hover:bg-gray-100'>
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => handlePriceValue(data?.value)}
                          id="menu-item-0" className="cursor-pointer text-gray-700 py-2 text-sm block px-4  dark:hover:bg-gray-600 hover:text-white">{data.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-text-gray-700">
            <div className="leading-[28px] font-medium">From</div>
            <div className="flex flex-col items-start justify-start text-9xl text-black">
              {morePerson ? <b className=" leading-[40px]">{morePerson}</b> :
                <b className=" leading-[40px]">{`${priceValue}/- `}</b>}
              <div className=" text-xs leading-[16px] font-medium">{`Per Person (All taxes & fees included)`}</div>
            </div>
          </div>
        </div>
      </div>
      <VariantFilledTypePrimary
        label="Book Now"
        variantFilledTypePrimaryBorderRadius="25px"
        variantFilledTypePrimaryBackgroundColor="#0022cc"
        variantFilledTypePrimaryJustifyContent="center"
        variantFilledTypePrimaryAlignSelf="stretch"
        onClick={() => {
          setIsModalOpen(true)
        }}
      />

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
          <div className=" flex md:flex-row py-14 px-14 flex-col gap-10 bg-white p-8 rounded-lg shadow-xl w-4/5">
            <div className="md:w-2/4">
              <img className="w-full"
                src="/assets/images/logo/booklogo.png" alt="logo" />
            </div>
            <form className="md:w-2/4" onSubmit={handleSubmit(handleAddToCart)}>
              <h1>Book {title}</h1>
              <p className=" text-sm leading-6 font-normal mb-4">For more information. Please complete this form.</p>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="mt-2 p-3 w-full border"
                />
                <p className=" text-red-600 ">{errors.name?.message}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="mt-2 p-3 w-full border"
                />
                <p className=" text-red-600 ">{errors.email?.message}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-black">
                  Phone Number
                </label>
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  id="phoneNumber"
                  className="mt-2 p-3 w-full border"
                // onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                <p className=" text-red-600 ">{errors.phoneNumber?.message}</p>
              </div>
              <div className="flex justify-end gap-2 ">
                <button
                  type="submit"
                  className="px-4 py-3 cursor-pointer bg-mediumblue-100 text-white rounded-md"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  className="px-4 py-2 cursor-pointer bg-red-700 text-white rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="self-stretch relative text-xs leading-[20px]">
        <p className="m-0">
          <span className="font-medium font-lead-lead-2 text-black">{`Need help? `}</span>
          <Link
            href="#footer"
            className="font-extrabold font-lead-lead-2 text-mediumblue-100 no-underline"
          >
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Call us now
            </ScrollLink>
          </Link>

          <span className="font-medium">{` `}</span>
        </p>
        <p className="m-0 font-medium">
          We will help you personalise the package for you !
        </p>
      </div>
    </div>
  );
}

export default PriceCard;