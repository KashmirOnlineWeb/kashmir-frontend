import type { NextPage } from "next";
import ListingForm from "./listing-form";
import { Pagination } from "./pagination";
import Property1pack2 from "./property1pack2";
import SideFilters from "./side-filters";
import { useSelector } from "react-redux";
import Link from "next/link";
import { HotelSecondType } from "@/services/hotel.secondtype";

type Allhotels = {
  hotelData: HotelSecondType.HotelResult[];
  isLoading: boolean;
  star: any;
};

const AllHotels: NextPage<Allhotels> = (props) => {
  // const hotelData = useSelector((state: any) => state.hotel.data)

  const filteredData =
    props.star ? props.hotelData?.filter((value: any) => value.star == props.star) :
      props.hotelData;


  return (
    <div className="bg-white px-4">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-8 lg:gap-14">
          {/* <div className="md:w-1/5 w-full sm:m-[12px] md:m-0">
            <SideFilters />
          </div> */}
          <div className=" w-full">
            <div className="flex flex-row items-center justify-start md:py-[40px] text-black">
              Showing {filteredData?.length || 0} results
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 ht_section flex-wrap items-start pb-[25px] gap-4">
              {filteredData?.map((value, index) => (
                <div key={index} className="w-full sm:w-auto">
                  <Link href={`/hotel/${value?.slug}`} className="no-underline">
                    <Property1pack2
                      frame95={value.imageURL}
                      property1pack2Position="unset"
                      property1pack2ZIndex="0"
                      packageName={value.hotel_name}
                      star={value.star}
                      totalDays={`${value.total_rooms} bedroom`}
                      location={value?.location}
                      amenities2="2 guest"
                      balcony={value.balcony}
                      perPerson="pp"
                      amenities1={`${value.total_rooms} bedroom`}
                      pacakgeText={value.breakfast}
                      price={`₹ ${value.price}`}
                      taxes={`+ ₹ ${Math.round(
                        value.price * (value.tax / 100)
                      )} taxes`}
                      isAllListing={true}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="hidden md:block w-[90%] lg:w-full">
              <ListingForm />
            </div>

            {/* <div className="mt-[40px] border border-solid border-smokegrey" /> */}
            <div className="pb-[50px] sm:px-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHotels;
