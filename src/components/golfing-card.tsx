/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import FAQsSection from "./faq";
import HighLightSection from "./HighLightSection";
import TourismText from "./TourismText";
import PriceCard from "./price-card";
import BestTimeVisit from "./BestTimeVisit";
import Inclusions from "./Inclusions";
import HotelRooms from "./hotelRooms";
import HotelAmenities from "./hotelAmenities";

type GolfingCardType = {
  trueProp?: boolean;
  tourismText?: string;
  price?: any | undefined;
  content?: string;
  timePeriods?: string;
  sub_title?: string;
  title?: string;
  add_more_things?: string;
  vectorImageUrl?: string;
  vectorLabel?: string;
  star?: string;
  location?: string
  highlights?: string
  isHotel?: boolean
  hotelpolicy?: boolean
  amenity?: boolean,
  pageTitle?: string;
  slug?: any;

};

const GolfingCard: NextPage<GolfingCardType> = ({ trueProp,
  tourismText,
  slug,
  price,
  content,
  timePeriods,
  sub_title,
  title,
  add_more_things,
  vectorImageUrl,
  vectorLabel,
  star,
  pageTitle,
  location,
  highlights,
  isHotel,
  hotelpolicy,
  amenity,

}) => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="md:w-3/5 md:px-0 px-4  gap-[48px] text-left text-black font-lead-lead-2">
          <div className="gap-[16px]">
            <TourismText
              tourismText={tourismText}
              content={content}
              trueAdventure={true}
              star={star}
              slug={slug}
              pageTitle={pageTitle}
              location={location}
              isHotel={isHotel}
            />
          </div>
          {
            trueProp ? <BestTimeVisit
              containerClass=""
            /> : ''
          }

          {/* <HotelRooms /> */}


          {highlights && highlights != undefined &&
            <div id="policies">
              <HighLightSection highlights={highlights} hotelpolicy={hotelpolicy} /></div>}

          {amenity ?
            <div id="amenities">
              <HotelAmenities amenity={amenity} /> </div> : ""
          }

          <div className="flex flex-col items-start justify-start pb-[60px] pt-[40px]">
            <FAQsSection noPadding="pb-0" faqTitle="Whats included" message="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked." />
          </div>
        </div>
        <div className="md:w-20"></div>

        {price || price > 0 && <PriceCard price={price} />}
      </div>
    </div>
  );
};

export default GolfingCard;
