import type { NextPage } from 'next';
import AmazingHolidays from '@/components/amazing-holidays';
import FilterComponent from '@/components/filter-component';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import PageHero from '@/components/page-hero';
import PageTopBar from '@/components/page-top-bar';
import Testimonial from '@/components/testimonial';
import HotelSearch from '@/components/HotelSearch';
import AllHotels from '@/components/AllHotels';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { HotelServices } from '@/services/hotelFilter';
import { ListingPackageFilter } from '@/components/listing.package.filter';
import ScrollRestoration from '@/components/scrollrestoration';
// import { Hotel } from '@/services/hotel.type';
import { HotelSecondType } from '@/services/hotel.secondtype';
const Hotel: NextPage = () => {
  const router = useRouter();
  const [pageLimit, setLimit] = useState(6);
  const {
    price,
    hotel_star,
    location,
    page,
  } = router.query;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["hotel-type"],
    queryFn: () =>
      HotelServices.Hotel({
        price: price,
        star: hotel_star,
        limit: pageLimit,
        location: location,
      }),
  });

  const handleScroll = () => {
    const middlePosition = window.innerHeight / 2;

    const scrollPosition = window.scrollY + middlePosition;

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

  const debouncedScroll = debounce(handleScroll, 200);

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
    location,
    hotel_star,
    pageLimit, // Include pageLimit in the dependency array
  ]);

  return (
    <>
      <ScrollRestoration>

        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
          <Header />
          <PageTopBar />
          {/* <HotelSearch /> */}
          <PageHero
            heroTitle="Select your suitable Holiday Package"
            heroSubtitle="Packages, Sightseeing, Hotel Booking,Adventures,Car Rentals & more.."
            variantLabel="Enquire with us"
            heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
          />
          <ListingPackageFilter
            hotel_star={data?.filters?.star as string[]}
            // season={data?.filter[0].season as string[]}
            budget_type={[] as string[]}
            categories={[] as string[]}
            price={data?.filters?.price as number[]} season={[]}
            defaultProp={false}
          />
          < AllHotels
            star={hotel_star}
            isLoading={isLoading}
            hotelData={data?.results as unknown as HotelSecondType.HotelResult[]} />
          <AmazingHolidays />
          <Testimonial bgColor="bg-transparent" />
          <Footer />
        </div>
      </ScrollRestoration>
    </>
  );
};
export default Hotel;
