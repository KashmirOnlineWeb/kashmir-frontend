import type { NextPage } from "next";
import ListingForm from "./listing-form";
import { Pagination } from "./pagination";
import Property1pack2 from "./property1pack2";
import SideFilters from "./side-filters";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllCar } from "@/services/car";
import { getCar } from "@/redux/slices";
import PageWithLoaders from "./loader";

type Allcars = {
  imageUrl?: string;
  name?: string;
  totalDays?: string;
  place?: string;
  amenities1?: string;
  amenities2?: string;
  amenities3?: string;
  description?: string;
  taxes?: string;
  amenities4?: string;
  price?: string;
  star?: string;
  isPackage?: boolean;
  isHotel?: boolean;
};

const AllCars: NextPage<Allcars> = ({ }) => {
  const carData = useSelector((state: any) => state.car.data);
  const propLoaderValue = 1;
  const [showLoader, setShowLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const FetchData = async () => {
      const data = await getAllCar();
      dispatch(getCar(data?.data?.data));
      setShowLoader(false);
    };
    FetchData();
  }, [dispatch]);

  return (
    <div className="bg-white px-4">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-8 lg:gap-14">
          <div className="md:w-1/5 w-full sm:m-[12px] md:m-0">
            <SideFilters />
          </div>
          <div className="md:w-4/5 w-full">
            <div className="flex flex-row items-center justify-start md:py-[40px] text-black">
              <div className="relative font-medium">Showing 40 results</div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 flex-wrap items-start pb-[25px] gap-4">
              {showLoader ? (
                <PageWithLoaders prop={propLoaderValue} />
              ) : (
                carData &&
                carData.map(
                  (
                    car: {
                      [x: string]: any;
                      location: string | undefined;
                      star: string | undefined;
                      imageURL: string | undefined;
                      hotel_name: string | undefined;
                    },
                    index: any
                  ) => (
                    <Property1pack2
                      key={index}
                      frame95={car.imageURL}
                      property1pack2Position="unset"
                      property1pack2ZIndex="0"
                      packageName={car.car_name}
                      amenities2={car.variant}
                      amenities3={car.ac ? "Ac" : "Non Ac"}
                      amenities1={car.type}
                      amenities4={`${car.seats} Seats`}
                      pacakgeText={car.breakfast}
                      price={`From ₹ ${car.price} pp`}
                      // description="₹ 16.0 / km after 148 kms"
                      isPackage={true}
                    />
                  )
                )
              )}
            </div>
            <div className="hidden md:block w-[97%] lg:w-full">
              <ListingForm />
            </div>
            <div className="mt-[40px] border border-solid border-smokegrey" />
            <div className="pb-[50px] sm:px-4">
              <Pagination pageCount={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
