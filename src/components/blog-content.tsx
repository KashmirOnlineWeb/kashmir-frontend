/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Date from '@/components/Date';
import ThingsToDoForm from "./thingstodoForm";
interface BlogProps {
  featuredImageUrl: any;
  postData: any;
}

export default function BlogContent({ postData, featuredImageUrl }: BlogProps) {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleFormSticky = () => {
      setScroll(window.scrollY > 277)
    }

    window.addEventListener("scroll", handleFormSticky)

    return (() => {
      window.removeEventListener("scroll", handleFormSticky)
    })
  }, [])

  return (
    <>
      <div className="font-label-small-label flex flex-col items-start justify-start gap-[16px] self-stretch max-lg:px-5 py-5 text-left text-sm text-black">
        <div className="flex flex-row items-start justify-between self-stretch">
          <div className="flex flex-1 flex-col items-start justify-end gap-[8px]">
            <b className="font-inter relative uppercase leading-[18px] tracking-[1px]">
              Religious visits
            </b>
            <div className="font-inter flex md:flex-row flex-col items-center md:items-start md:justify-start gap-[12px] self-stretch text-[25px] md:text-21xl">
              <div className="relative flex-1 font-extrabold max-md:text-center leading-[34px] md:leading-[54px] text-black">
              <div dangerouslySetInnerHTML={{ __html: postData?.title }} />
              </div>
              {/* <button className="flex cursor-pointer flex-row items-center justify-start gap-[10px] rounded-6xl bg-mediumblue-100 px-5 py-2.5 [border:none]">
                <img
                  className="relative h-[20px] w-[20px]"
                  alt=""
                  src="/assets/images/icons/heart-white.svg"
                />
                <div className="font-label-small-label relative text-center text-sm font-medium leading-[20px] text-default-white">
                  Save
                </div>
              </button> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-xs">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="font-inter relative text-sm font-semibold leading-[16px]">
              By {postData.author.node.name}
            </div>
            <div className="bg-darkgray relative h-[5px] w-[5px] rounded-[50%]" />
            <div className="font-inter relative font-medium leading-[16px]">
              <Date dateString={postData.modified} />
            </div>
            <div className="bg-darkgray relative h-[5px] w-[5px] rounded-[50%]" />
            <div className="font-inter relative font-medium leading-[16px]">
              4 min read
            </div>
          </div>
        </div>
      </div>
      <div className="relative font-inherit flex flex-col items-start justify-start gap-[24px] max-md:px-5 self-stretch text-inherit text-black">
        <div className=" w-full flex md:gap-0 gap-4 flex-col md:flex-row mb-10">
          <div className=" md:w-3/5 w-full col-span-10 md:col-span-7">
            <div className="font-label-small-label flex flex-row items-start justify-start gap-[38px] self-stretch text-sm text-gray-200">
              <img
                className="w-full rounded-3xl object-cover"
                alt=""
                src={featuredImageUrl}
              />
              {/* <div className="flex flex-row items-center justify-center self-stretch py-0">
        <div className="relative flex-1 leading-[24px]">
          Image caption goes here
        </div>
      </div> */}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: postData.content }}
              className="custom-css font-label-small-label w-full font-inter my-0 flex flex-col items-start justify-start gap-[8px] px-30 py-0 text-base text-black"
            />
          </div>
          <div className="sm:w-0 lg:w-20"></div>
          <div className={` ${scroll ? "md:sticky md:top-12 md:right-0 " : ""} md:w-1/3 col-span-10 md:col-span-3 h-[710px] bg-white rounded-lg shadow-xl border-[1px] `}>
            {/* <form className="scrolled flex flex-col items-start p-[30px] w-full font-medium justify-start gap-[14px] text-black">
              <label className="text-lg font-semibold" htmlFor="name">Your Name</label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-mediumblue-100"
                type="text"
                id="name"
                name="name"
                size={40}
                placeholder="Your Name"
              />
              <label className="text-lg font-semibold" htmlFor="whatsappNumber">WhatsApp Number</label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-mediumblue-100"
                type="text"
                id="whatsappNumber"
                name="whatsappNumber"
                size={40}
                placeholder="WhatsApp Number"
              />
              <label className="text-lg font-semibold" htmlFor="monthOfTravel">
                Month of Travel
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-mediumblue-100"
                type="text"
                size={40}
                placeholder="Month of Travel "
              />
              <label className="text-lg font-semibold" htmlFor="adults">
                No. Of Adults
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-mediumblue-100"
                type="text"
                size={40}
                placeholder="No. Of Adults"
              />
              <label className="text-lg font-semibold" htmlFor="children">
                No. Of Children
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-mediumblue-100"
                type="text"
                size={40}
                placeholder="No. Of Children "
              />
              <label className="text-lg font-semibold" htmlFor="budgetPerPerson">
                Budget Per Person
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-mediumblue-100"
                type="text"
                size={40}
                placeholder="Budget Per Person"
              />
              <button
                className="w-[100px] bg-mediumblue-100 text-default-white py-2 rounded focus:outline-none"
                type="submit"
              >
                Submit
              </button>
            </form> */}
            <div>
              <ThingsToDoForm formClassProp={true} customMargin={true} />
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
