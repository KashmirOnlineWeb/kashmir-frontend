import { Button } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify"
export const QueryForm = () => {

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
        message: yup.string().required("Message are Required"),
    })

    const { register, reset, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            message: ""
        },
        resolver: yupResolver(schema)
    })
    const onSubmit = async (data: any) => {
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
                            to: [{ email: data.email }]
                        }
                    ],
                    from: { email: 'amanthakur@webopstechnologies.com' }, // Replace with your sender email address
                    name: data.name,
                    email: data.email,
                    mobile: data.phoneNumber,
                    message: data.message,
                    content: [
                        {
                            type: 'text/plain',
                            value: data.phoneNumber
                        }
                    ]
                })
            });

            if (response.ok) {
                toast.success("Form Submitted Sucessfully", {
                    position: 'top-right',
                    autoClose: 3000,
                });
            } else {
                console.error('Failed to send email:', response.statusText);
            }
            reset()
        } catch (error) {
            toast.error("Error sending Form", {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    }

    return (
        <>
            <div className="border-[1px] border-solid border-mediumblue-100 p-8 rounded-3xl ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-black md:text-lg text-sm'>Your Name</label>
                    <input
                        className="w-full font-inter mt-2 mb-3 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm"
                        type="text"
                        {...register("name")}
                        placeholder="Enter Name"
                    /><p className=" text-red-600 ">{errors.name?.message}</p>
                    <label className=' text-black md:text-lg text-sm'>Your Email</label>
                    <input
                        type="text"
                        className="w-full mb-2 font-inter mt-3 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm"
                        {...register("email")}
                        placeholder="Enter Email"
                    /><p className=" text-red-600 ">{errors.email?.message}</p>
                    <label className='text-black md:text-lg text-sm'>Your Number</label>
                    <input
                        type="tel"
                        className="w-full mb-2 font-inter mt-3 rounded-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm"
                        {...register("phoneNumber")}
                        placeholder="Enter Number"
                    /><p className=" text-red-600 ">{errors.phoneNumber?.message}</p>
                    <label className='text-black md:text-lg text-sm'>Your Message</label>
                    <textarea
                        className="font-inter mt-3 rounded-full w-full font-label-small-label box-border flex h-12 flex-row items-center justify-start self-stretch border-[1px] border-solid border-text-gray-300 bg-[transparent] px-3 text-sm"
                        {...register("message")}
                        placeholder="Enter Message"
                    ></textarea>
                    <button className='cursor-pointer bg-mediumblue-100 px-6 py-3 mt-4 w-full rounded-full text-white'>Submit</button>
                </form>
            </div>
        </>
    )
}