import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { ScrollBar } from '@/components/scrollbar';
import AllRestorents from '@/components/AllRestaurants';
const CollagesSchools: NextPage = () => {
    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <ScrollBar />
            <AllRestorents />
            <Footer />
        </div>
    );
};
export default CollagesSchools;