/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Checkbox from './checkbox';
import FaqCollapse from './faq-collapse';

const SideFilters: NextPage = () => {
  const router = useRouter()

  const handleCheckboxChange = (checkboxData: any) => {
    const { minValue, maxValue, season } = checkboxData;
    // Create a new query object without directly modifying the existing one
    const query = Object.assign({}, router.query, {
      minValue: minValue,
      maxValue: maxValue,
      season,
    });

    router.replace({
      pathname: router.pathname,
      query,
    });
  };



  return (
    <>
    {/* <div className='md:block hidden'>
      <div className="flex justify-between pb-[24px] pt-[15px]">
        <h3 className="m-0 font-medium text-black">Filters</h3>
        <a href="#" className="font-semibold color-pink no-underline">
          RESET
        </a>
      </div>
      <FaqCollapse
        faqTitle="Budget"
        subContent={
          <>
            <Checkbox checkboxLabel="₹5,000 to 10,000 " minValue={5000} maxValue={10000}
              onCheckboxChange={handleCheckboxChange} />
            <Checkbox checkboxLabel="₹ 10,000 to 15,000 " minValue={10000} maxValue={15000}
              onCheckboxChange={handleCheckboxChange} />
            <Checkbox checkboxLabel="₹ 15,000 to 20,000 " minValue={15000} maxValue={20000}
              onCheckboxChange={handleCheckboxChange} />
            <Checkbox checkboxLabel="₹ 20,000 to 25,000 " minValue={20000} maxValue={25000}
              onCheckboxChange={handleCheckboxChange} />
          </>
        }
        faqIcon="fontisto:angle-down"
        width="w-full"
        textLg="text-lg"
        colorBlue=" color-pink"
        borderWidth=""
      /> */}
      {/* <FaqCollapse
        faqTitle="Filter 2"
        faqIcon="fontisto:angle-down"
        width="w-full"
        textLg="text-lg"
        colorBlue=" color-pink"
        borderWidth=""
      /> */}
      {/* <FaqCollapse
        faqTitle="Travel Season"
        subContent={
          <>
            <Checkbox
              checkboxLabel="Summer Season"
              onCheckboxChange={handleCheckboxChange}
              season={"summer"} />
            <Checkbox
              checkboxLabel="Winter Season"
              onCheckboxChange={handleCheckboxChange}
              season={"winter"} />
            <Checkbox
              checkboxLabel="Rainy Season"
              onCheckboxChange={handleCheckboxChange}
              season={"rainy"} />
            <Checkbox
              checkboxLabel="Autumn Season"
              onCheckboxChange={handleCheckboxChange}
              season={"autumn"} />
          </>
        }
        faqIcon="fontisto:angle-down"
        width="w-full"
        textLg="text-lg"
        colorBlue=" color-pink"
        borderWidth=""
      />
      </div> */}


       {/* static ui */}
      <div className="w-full md:hidden block mt-4">
        <h3 className="m-0 font-medium text-black">Choose Filters</h3>
        <div className="mt-4 flex gap-2 container overflow-x-auto">
          <select
            className="block bg-white border-2 border-[#9F9F9F80] rounded-full text-[12px] leading-6 font-bold pr-6 py-1"
          >
            <option value="">Package theme</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <select
            className="block bg-white border-2 border-[#9F9F9F80] rounded-full text-[12px] leading-6 font-bold pr-6 py-1"
          >
            <option value="">Select budget</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>


          <select
            className="block bg-white border-2 border-[#9F9F9F80] rounded-full text-[12px] leading-6 font-bold pr-6 py-1"
          >
            <option value="">Hotel category</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button className="w-[90%] text-[16px] mt-4 font-semibold rounded-full bg-mediumblue-100 text-white py-4 cursor-pointer">Search</button>
      </div>
    </>
  );
};
export default SideFilters;
