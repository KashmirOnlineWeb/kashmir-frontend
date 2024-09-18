import ListingForm from "./listing-form";
import { Pagination } from "./pagination";
import Property1pack2 from "./property1pack2";
import { useRouter } from "next/router";
import Link from "next/link";
import PageWithLoaders from "./loader";
import React, { useEffect, useState } from "react";

import { ListingPackageSideFilters } from "./listing.package.side.filter";
import { ListingType } from "@/services/listing.type";

type ListingCategory = {
  packageData: ListingType.PackageResult[];
  // days: number[];
  season: string[];
  // nights: number[];
  // max_capacity: number[];
  // available_slots: number[];
  destination: string[];
  isLoading: boolean;
};
export const ListingPackageCategoriesCards: React.FC<ListingCategory> = (
  props
) => {
  const router = useRouter();

  return (
    <div className="bg-white px-[24px] sm:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:gap-14">
          <div className="w-.5/5 sm:block ">
            <ListingPackageSideFilters
              // nights={props.nights}
              // max_capacity={props.max_capacity}
              // available_slots={props.available_slots}
              // days={props.days}
              season={props.season}
              destination={props.destination}

            />
          </div>
          <div className="sm:w-4.5/5 w-full">
            <div className="flex flex-row items-center justify-start py-[40px] text-black">
              <div className="relative font-medium">
                Showing {props.packageData?.length || 0} results
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap items-start pb-[25px] gap-4">
              {props.isLoading ? (
                <PageWithLoaders prop={props.isLoading} />
              ) : (
                <>
                  {props.packageData?.map((value, index) => (
                    <div key={index} className="w-full sm:w-auto">
                      <Link
                        href={`/package/${value?.slug}`}
                        className="no-underline"
                      >
                        <Property1pack2
                          frame95={value?.imageURL}
                          property1pack2Position="unset"
                          property1pack2ZIndex="0"
                          packageName={value?.package_name}
                          star={value?.hotel_star}
                          totalDays={`${value?.duration?.nights}N / ${value?.duration?.days}D`}
                          location={value?.destination}
                          amenities2="Hotel"
                          amenities3="Transport"
                          amenities1="Sightseeing"
                          pacakgeText={value?.content}
                          perPerson="pp"
                          price={`From ₹ ${value?.price}`}
                          isPackage={true}
                          isHotel={true}
                          isAllListing={true}
                        />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="hidden md:block w-[80%] lg:w-full">
              <ListingForm />
            </div>
            {/* <div className="mt-[40px] border border-solid border-smokegrey" /> */}
            <div className="pb-[50px]">
              {/*<Pagination pageCount={10} />*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
