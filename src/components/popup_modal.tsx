import { useState } from "react";
import sgMail from '@sendgrid/mail'; // Step 4: Import SendGrid library
import { BookingPackage } from "@/services/bookingPackage"
import { NextPage } from "next";
// sgMail.setApiKey('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'); // Replace with your actual SendGrid API key

type PopUptypes = {
    isOpen?: boolean;
    closeModal: () => void;
}
const PopUp: NextPage<PopUptypes> = ({ isOpen, closeModal }) => {
    const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "" });
    // const handleAddToCart = async (e: any) => {
    //     e.preventDefault()
    //     try {
    //         const response = BookingPackage(formData)
    //         closeModal()
    //         setFormData({ name: "", email: "", phoneNumber: "" });
    //     }
    //     catch (err) { err }

    // };
    // const handleAddToCart = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //       await sgMail.send({
    //         to: 'arunkumar@webopstechnologies.com',
    //         from: 'amanthakur@webopstechnologies.com',
    //         subject: 'New Booking Enquiry',
    //         html: `
    //           <p>Name: ${formData.name}</p>
    //           <p>Email: ${formData.email}</p>
    //           <p>Phone Number: ${formData.phoneNumber}</p>
    //         `,
    //       });
    //       closeModal();
    //       setFormData({ name: '', email: '', phoneNumber: '' });
    //     } catch (error) {
    //       console.error('Error sending email:', error);
    //     }
    //   };

    const handleAddToCart = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            const response = await fetch('api/auth/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${"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"}` // Use your SendGrid API key
                },
                body: JSON.stringify({
                    personalizations: [
                        {
                            to: [{ email: formData.email }]
                        }
                    ],
                    from: { email: 'amanthakur@webopstechnologies.com' }, // Replace with your sender email address
                    name: formData.name,
                    content: [
                        {
                            type: 'text/plain',
                            value: formData.phoneNumber
                        }
                    ]
                })
            });
            console.log(response, "responce , ok")

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };


    return (<>
        {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
                <div className=" flex md:flex-row py-14 px-14 flex-col gap-10 bg-white p-8 rounded-lg shadow-xl w-4/5">
                    <div className="md:w-2/4">
                        <img className="w-full"
                            src="/assets/images/logo/booklogo.png" alt="logo" />
                    </div>
                    <form className="md:w-2/4" onSubmit={handleAddToCart}>
                        <h1>Book</h1>
                        <p className=" text-sm leading-6 font-normal mb-4">For more information. Please complete this form.</p>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-black">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                className="mt-2 p-3 w-full border"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                className="mt-2 p-3 w-full border"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-black">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                className="mt-2 p-3 w-full border"
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-2 ">
                            <button
                                type="submit"
                                className="px-4 py-3 cursor-pointer bg-mediumblue-100 text-white rounded-md"
                            >
                                Send Enquire
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 cursor-pointer bg-red-700 text-white rounded-md"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </>)
}
export default PopUp