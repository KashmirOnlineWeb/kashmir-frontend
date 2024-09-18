import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header';
import SectionTitle from '@/components/section-title';
import Description from '@/components/description';
import { ScrollBar } from '@/components/scrollbar';
const Hospitals: NextPage = () => {
    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <ScrollBar />
            <div className="container mx-auto my-[60px]">
                <SectionTitle
                    topTitle="Background history"
                    viewAllDisable={false}
                    topSubTitle="A Spiritual Journey: Exploring the Enchancing Religous Places of Kashmir"
                />
                <Description
                    title="LoremLorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum is simply dummy text of the printing and typesetting industry. "
                    subtitle=""
                    content=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                    imageSrc="/assets/images/package/package.webp"
                />
            </div>
            <Footer />
        </div>
    );
};
export default Hospitals;