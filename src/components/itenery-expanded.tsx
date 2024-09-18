import type { NextPage } from "next";
import Days from "./days";
import HotelCheckIn from "./hotel-checkin";
import Transfer from "./transfer";

type IteneryExpandedType = {
  iconamoonarrowDown2Fill?: string;
  materialSymbolshotelRound?: string;
  mdiedit?: string;
  change?: string;
  frame3737470?: string;
  vector?: string;
  materialSymbolshotelRound1?: string;
  mdiedit1?: string;
  frame37374701?: string;
  luxurySedan?: string;
  zondiconstime?: string;
  faqsubtitle?: string;
};

const IteneryExpanded: NextPage<IteneryExpandedType> = ({
  iconamoonarrowDown2Fill,
  materialSymbolshotelRound,
  mdiedit,
  change,
  frame3737470,
  vector,
  materialSymbolshotelRound1,
  mdiedit1,
  frame37374701,
  luxurySedan,
  zondiconstime,
  faqsubtitle,
}) => {
  return (
    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border gap-[16px] text-left text-lg text-mediumblue-100 font-label-small-label self-stretch">
      <b className="relative leading-[28px] flex items-center w-16 shrink-0">
        {faqsubtitle}
      </b>
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
        
        <HotelCheckIn
          iconImageUrl="mdi:bed"
          iconName="heroicons:pencil-solid"
          buttonText="Change"
          frameLabel="/assets/images/package/hotel-booking.jpeg"
          symbolImageUrl="/vector14.svg"
        />
        <Transfer
          iconImageUrl="mdi:bed"
          iconName="heroicons:pencil-solid"
          frameImageUrl="/assets/images/package/car-transfer.jpeg"
          vehicleType="Luxury Sedan"
          iconSvgName="/zondiconstime1.svg"
        />
      </div>
    </div>
  );
};

export default IteneryExpanded;
