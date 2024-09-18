import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import ImageGallery from '@/components/ImageGallery';
import { Navigation } from '@/components/navigation';
import Location from '@/components/location';
import GolfingCard from '@/components/golfing-card';
import SpecialPackages from '@/components/special-packages';

const BookActivity: NextPage = () => {
  return (
    <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
      <Header />
      <ImageGallery />
      <Navigation />
      <GolfingCard tourismText="Golfing at Pahalgam" />
      <SpecialPackages color="bg-white" titleName="Other Activities" smallTitle={true} />
      <Footer />
    </div>
  );
};
export default BookActivity;
