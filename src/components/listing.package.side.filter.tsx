import FaqCollapse from "./faq-collapse";
import React from "react";
import { ListingType } from "@/services/listing.type";
import { CheckboxGroup } from "@/components/checkbox.group";
import { useRouter } from "next/router";

export const ListingPackageSideFilters: React.FC<
  ListingType.CategoriesFilters
> = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between pb-[24px] pt-[40px]">
        <h3 className="m-0 font-medium text-black">Filters</h3>
        <div
          onClick={async () => {
            await router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                price: null,
                hotel_star: null,
                destination: null,
                max_capacity: null,
                days: null,
                nights: null,
                available_slots: null,
                category_name: null,
                season: null,
                budget_type: null

              },
            });
          }}
          className=" select-none cursor-pointer font-semibold color-pink no-underline"
        >
          RESET
        </div>
      </div>
      {props.destination && (
        <>
          <FaqCollapse
            faqTitle="Destination"
            subContent={
              <>
                {props.destination.map((value, index) => (
                  <CheckboxGroup
                    keyOfFilter={"destination"}
                    key={index}
                    label={value}
                  />
                ))}
              </>
            }
            faqIcon="fontisto:angle-down"
            width="w-full"
            textLg="text-lg"
            colorBlue="color-pink"
            borderWidth=""
            gapDestination="gap-6"
          />
        </>
      )}

      {props.season && (
        <>
          <FaqCollapse
            faqTitle="Season"
            subContent={
              <>
                {props.season.map((value, index) => (
                  <CheckboxGroup
                    keyOfFilter={"season"}
                    key={index}
                    label={value}
                  />
                ))}
              </>
            }
            faqIcon="fontisto:angle-down"
            width="w-full"
            textLg="text-lg"
            colorBlue="color-pink"
            borderWidth=""
          />
        </>
      )}
      {/* {props.days && (
        <>
          <FaqCollapse
            faqTitle="Days"
            subContent={
              <>
                {props.days.map((value, index) => (
                  <CheckboxGroup
                    keyOfFilter={"days"}
                    key={index}
                    label={value}
                  />
                ))}
              </>
            }
            faqIcon="fontisto:angle-down"
            width="w-full"
            textLg="text-lg"
            colorBlue="color-pink"
            borderWidth=""
          />
        </>
      )}
      {props.nights && (
        <>
          <FaqCollapse
            faqTitle="Nights"
            subContent={
              <>
                {props.nights.map((value, index) => (
                  <CheckboxGroup
                    keyOfFilter={"nights"}
                    key={index}
                    label={value}
                  />
                ))}
              </>
            }
            faqIcon="fontisto:angle-down"
            width="w-full"
            textLg="text-lg"
            colorBlue="color-pink"
            borderWidth=""
          />
        </>
      )}
      {props.available_slots && (
        <>
          <FaqCollapse
            faqTitle="Available Slots"
            subContent={
              <>
                {props.available_slots.map((value, index) => (
                  <CheckboxGroup
                    keyOfFilter={"available_slots"}
                    key={index}
                    label={value}
                  />
                ))}
              </>
            }
            faqIcon="fontisto:angle-down"
            width="w-full"
            textLg="text-lg"
            colorBlue="color-pink"
            borderWidth=""
          />
        </>
      )} */}
    </>
  );
};
