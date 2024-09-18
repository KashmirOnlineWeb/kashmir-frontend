import type { NextPage } from 'next';
import { Form, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PackageIcon from './packageIcon';
import { useState } from 'react';
import VariantFilledTypePrimary from './variant-filled-type-primary';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from "react-toastify";
import Api from '@/services/axios/config';
import Link from 'next/link';
type ThingsToDoFormType = {
    formClassProp?: boolean;
    customMargin?: any;
}

const ThingsToDoForm: NextPage<ThingsToDoFormType> = ({ formClassProp, customMargin }) => {
    const homeData = useSelector((state: any) => state.homePage.data)
    const schema = yup.object({
        name: yup.string().required("Name is Required"),
        email: yup.string()
            .required("Email is required")
            .email("Invalid email format")
            .min(5, "Email must be at least 5 characters long")
            .max(255, "Email must be less than 255 characters"),
        number: yup.string().required("Number is Required")
            .min(10, "Number must be at least 10 Digits")
            .max(10, "Number should not be at greater than 10 Digits"),
        guest: yup.string().required("Guest are Required"),
        hollyday: yup.string().required("Holiday are Required"),
    })

    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            name: "",
            email: "",
            number: "",
            guest: "",
            hollyday: ""
        },
        resolver: yupResolver(schema)
    })

    const onsubmit = async (data: any) => {
        try {
            await
                Api.post(`queryform`, {
                    name: data.name,
                    email: data?.email,
                    number: data?.number,
                    guest: data?.guest,
                    hollyday: data?.hollyday,
                })
            toast.success("User Query Send Sucessfully", {
                position: 'top-right',
                autoClose: 3000,
            });
            reset()
        }
        catch (err) {
            toast.error("Error to Send Query", {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    }

    return (
        <>
            {/* rounded-2xl bg-default-white box-border w-3/3 mt-8 flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100" */}
            <div className={`${formClassProp ? ` ${customMargin ? "mt-0" : "mt-8"} rounded-2xl bg-default-white box-border w-full flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100` : `rounded-2xl bg-default-white box-border md:w-1/3 w-full mt-8 flex flex-col items-start self-start justify-center p-4 gap-[16px] text-left text-sm text-black font-lead-lead-2 border-[1px] border-solid border-mediumblue-100`}`}>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <p className="mt-2 text-9xl color--wedge text-center font-bold">
                        Lets help you find the best deal!
                    </p>
                    <form onSubmit={handleSubmit(onsubmit)} className=" mt-2 flex flex-col w-full items-start justify-center text-lg text-text-black-700">
                        <label className='md:text-base text-sm'>Your Name</label>
                        <input
                            className="font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm"
                            {...register("name")}
                            type='text'
                            placeholder='Enter Name'
                        /><p className=" text-red-600 ">{errors.name?.message}</p>
                        <label className='mt-4 md:text-base text-sm'>Your Number</label>
                        <input
                            className="font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm"
                            {...register("number")}
                            type='tel'
                            placeholder='Enter Contact Number'
                        />
                        <p className=" text-red-600 ">{errors.number?.message}</p>

                        <label className='mt-4 md:text-base text-sm'>Your Email</label>
                        <input
                            className="font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm"
                            {...register("email")}
                            type='text'
                            placeholder='Enter Email Address'
                        />
                        <p className=" text-red-600 ">{errors.email?.message}</p>

                        <div className='self-stretch flex mt-4 flex-col items-start justify-start gap-[16px]'>
                            <div className='w-full'>
                                <label className='mt-4 md:text-base text-sm' >Number of guest</label>
                                <select id="countries"
                                    {...register("guest")}
                                    defaultValue=""
                                    placeholder='Enter total Guest'
                                    className=' w-full font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm'
                                >
                                    <option value="">Select number of guests</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select><p className=" text-red-600 ">{errors.guest?.message}</p>
                            </div>
                            <div className='w-full'>
                                <label className='mt-4 md:text-base text-sm'>Holiday Duration</label>
                                <select id="hollydays"
                                    {...register("hollyday")}
                                    defaultValue=""
                                    placeholder='Enter duration'
                                    className='w-full font-inter mt-1 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm'
                                >
                                    <option value="">Select holiday duration</option>
                                    <option value="Jan to Feb">Jan to Feb</option>
                                    <option value="March to April">March to April</option>
                                    <option value="Summer">Summer</option>
                                </select><p className=" text-red-600 ">{errors.hollyday?.message}</p>
                            </div>
                        </div>
                        <button className='cursor-pointer bg-mediumblue-100 px-6 py-3 mt-4 w-full rounded-full text-white'>Submit</button>
                        <div className="text-3xs mt-4 flex flex-col items-center justify-center gap-[4px] self-stretch font-body">
                            <div className="flex flex-row items-center justify-center gap-[4px] self-stretch">
                                <PackageIcon
                                    className="h-3 w-3 text-[#C9C9C9]"
                                    groupName="eva:phone-call-fill"
                                />
                                <div className=" text-sm relative tracking-[-0.02em]">
                                    Or simply call us for any query
                                </div>
                            </div>
                            {homeData?.contactdetail && homeData?.contactdetail.map((data: any, index: any) => (
                                <div key={index}>
                                    <Link
                                        className="flex flex-row items-center justify-start text-[inherit] [text-decoration:none]"
                                        href={`tel: ${data?.contact}`}
                                    >
                                        <div key={index} className="font-montserrat flex flex-col items-center justify-center self-stretch text-9xl">
                                            <b className="relative leading-[120%]">{`+91 ${data?.contact}`}</b>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ThingsToDoForm
