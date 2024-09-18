import type { NextPage } from "next";

type AddOnsType = {
  addonsdata?: any;
};

const AddOns: NextPage<AddOnsType> = ({ addonsdata }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-center mt-8">
          <b className="relative leading-[28px] text-black">Add-ons</b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px] text-inherit font-inherit">
          <div className="flex flex-row items-center justify-center">
            <div
              className="relative leading-[26px] editor-content"
              dangerouslySetInnerHTML={{ __html: addonsdata }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
