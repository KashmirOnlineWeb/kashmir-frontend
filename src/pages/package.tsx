/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import ImageGallery from '@/components/ImageGallery';
import { Navigation } from '@/components/navigation';
import IteneryExpanded from '@/components/itenery-expanded';
import FAQsSection from '@/components/faq';
import AllPackages from '@/components/AllPackages';

const Package: NextPage = () => {

  return (
    <>
      <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
        <Header />
        <ImageGallery />
        <Navigation />
        {/* <GolfingCard trueProp={true} tourismText="Best of Kashmir : A wholesome trip to cherish" /> */}
        <AllPackages lgClass="md:w-full lg:w-full" isPackage={true} />
        <Footer />
      </div>
    </>
  );
};
export default Package;
