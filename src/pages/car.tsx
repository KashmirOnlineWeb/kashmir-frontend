import type { NextPage } from 'next';
import AmazingHolidays from '@/components/amazing-holidays';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import ListingCategories from '@/components/listing-categories';
import PageHero from '@/components/page-hero';
import PageTopBar from '@/components/page-top-bar';
import Testimonial from '@/components/testimonial';
import HotelSearch from '@/components/HotelSearch';
import CarFilter from '@/components/CarFilter';
import AllCars from '@/components/AllCar';
const Car: NextPage = () => {
  return (
    <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
      <Header />
      <PageTopBar />
      <HotelSearch />
      <PageHero
        heroTitle="Select your suitable Holiday Package"
        heroSubtitle="Packages, Sightseeing, Hotel Booking,Adventures,Car Rentals & more.."
        variantLabel="Enquire with us"
        heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
      />
      <CarFilter />
      <AllCars />
      <AmazingHolidays />
      <Testimonial bgColor="bg-transparent" />
      <Footer />
    </div>
  );
}

export default Car;
