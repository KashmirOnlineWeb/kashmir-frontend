import type { NextPage } from "next";
import AmazingHolidays from "@/components/amazing-holidays";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import PageHero from "@/components/page-hero";
import PageTopBar from "@/components/page-top-bar";
import Testimonial from "@/components/testimonial";
import { useQuery } from "@tanstack/react-query";
import { ListingServices } from "@/services/listing";
import ScrollRestoration from "@/components/scrollrestoration";
import { ListingPackageSearch } from "@/components/listing.package.search";
import { ListingPackageFilter } from "@/components/listing.package.filter";
import { ListingPackageCategoriesCards } from "@/components/listing.package.categories.cards";
import { ListingType } from "@/services/listing.type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/loading";
const Listing: NextPage = () => {
  const router = useRouter();
  const [pageLimit, setLimit] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false); // State to track loading more data

  console.log(pageLimit);
  const {
    price,
    max_capacity,
    available_slots,
    days,
    nights,
    hotel_star,
    season,
    category,
    destination,
    category_name,
    budget_type,
    page,
  } = router.query;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["package-list"],
    queryFn: () =>
      ListingServices.Package({
        price: price,
        max_capacity: max_capacity,
        available_slots: available_slots,
        days: days,
        nights: nights,
        hotel_star: hotel_star,
        season: season,
        destination: destination,
        category_name: category_name,
        budget_type: budget_type,
        category: category,
        limit: pageLimit,
      }),
  });
  console.log(data, "package data")
  const handleScroll = () => {
    const middlePosition = window.innerHeight / 2;
    const scrollPosition = window.scrollY + (middlePosition + 300);

    if (scrollPosition >= document.documentElement.scrollHeight / 2) {
      const newLimit = pageLimit * 2;
      setLimit(newLimit);
    }
  };

  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    delay: number
  ): ((...args: Parameters<F>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return function (this: any, ...args: Parameters<F>): void {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedScroll = debounce(handleScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [debouncedScroll]);
  useEffect(() => {
    refetch().then((r) => r);
  }, [
    price,
    max_capacity,
    available_slots,
    days,
    nights,
    hotel_star,
    budget_type,
    season,
    destination,
    category_name,
    pageLimit, // Include pageLimit in the dependency array
  ]);
  return (
    <ScrollRestoration>
      <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
        <Header />
        <PageTopBar />
        {/* <div className="sm:block hidden">
          <ListingPackageSearch />
        </div> */}
        <PageHero
          heroTitle="Select your suitable Holiday Package"
          heroSubtitle="Packages, Sightseeing, Hotel Booking,Adventures,Car Rentals & more.."
          variantLabel="Enquire with us"
          heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
          isListingPage={true}
        />
        <ListingPackageFilter
          hotel_star={data?.filter[0].hotel_star as string[]}
          season={data?.filter[0].season as string[]}
          budget_type={data?.filter[0].budget_type as string[]}
          categories={data?.filter[0].categories as string[]}
          price={data?.filter[0].price as number[]}
          defaultProp={true}
        />
        <ListingPackageCategoriesCards
          // days={data?.filter[0].days as number[]}
          // available_slots={data?.filter[0].available_slots as number[]}
          // max_capacity={data?.filter[0].max_capacity as number[]}
          // nights={data?.filter[0].nights as number[]}
          destination={data?.filter[0].destination as string[]}
          season={data?.filter[0].season as string[]}
          isLoading={isLoading}
          packageData={
            data?.data[0]?.results as unknown as ListingType.PackageResult[]
          }
        />

        <AmazingHolidays />
        <Testimonial bgColor="bg-transparent" />
        <Footer />
      </div>
    </ScrollRestoration>
  );
};
export default Listing;
