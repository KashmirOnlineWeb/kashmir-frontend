import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { Navigation } from '@/components/navigation';
import PageHero from '@/components/page-hero';
import Image from 'next/image';
import AddToCart from '@/components/shoppingAddToCartModal';
import { useState } from 'react';

const product = {
    name: "Kashmiri Saffron",
    size: 200,
    price: 1200,
    image: "/assets/images/slider/shop.jpeg",
};

const Shopping: NextPage = () => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
            <Header />
            <PageHero
                heroTitle="Shopping"
                heroSubtitle="Caption for Shopping / stories here"
                variantLabel=""
                heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
            />
            <Navigation breadcrumb={true} breadcrumbTitle="Shopping Places Jammu & Kashmir" />
            <div className='container max-sm:px-3 mx-auto my-10 flex sm:flex-row max-sm:flex-col'>
                <div className='sm-w-2/5 max-sm:w-full'>
                    <div className='flex sm:flex-row flex-col-reverse sm:gap-[56px] gap-5'>
                        <div className='flex sm:flex-col flex-row sm:gap-3 gap-2 max-sm:overflow-x-auto '>
                            <Image
                                className='rounded-xl border-2 border-solid border-[#DD1045] p-[6px]'
                                src="/assets/images/slider/shop.jpeg"
                                alt='Img1'
                                width={80}
                                height={80}
                            />
                            <Image
                                className='rounded-xl p-[6px]'
                                src="/assets/images/slider/shop.jpeg"
                                alt='Img1'
                                width={80}
                                height={80}
                            />
                            <Image
                                className=' rounded-xl p-[6px]'
                                src="/assets/images/slider/shop.jpeg"
                                alt='Img1'
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <Image
                                className='rounded-xl max-sm:w-full'
                                src="/assets/images/slider/shop.jpeg"
                                alt='Img1'
                                width={310}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className='flex mt-4 gap-6 sm:justify-end justify-start'>
                        <button className='bg-[#DD1045] rounded-full px-10 py-[7px] text-white'>Buy now</button>
                        <button
                            onClick={handleOpenModal}
                            className='border cursor-pointer border-solid border-black rounded-full px-10 py-[7px] text-black'>Add to cart</button>
                    </div>
                </div>
                <div className='sm:w-[10%]'></div>
                <div className=' sm:w-3/6 w-full h-auto'>
                    <div>
                        <div>
                            <div className='text-[#878787] leading-10'>{`Shop > Item name`}</div>
                        </div>
                        <div>
                            <p className='color--wedge leading-10 text-9xl font-bold'>Kashmir Saffron</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='color-pink leading-10 text-lg font-bold'>₹1200.00</div>
                            <span className='text-[#666666] leading-10 '>Tax included.</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-20'>
                            <div className='leading-10 text-black text-base font-medium '>Size</div>
                            <span className='color-pink leading-10 text-base font-semibold '>200 g</span>
                        </div>
                        <div className='flex gap-10'>
                            <div className='leading-10 text-black text-base font-medium '>Quantity</div>
                            <div className='flex gap-2'>
                                <div className='color--wedge w-10 h-10 text-center rounded-full border border-solid border-[#9F9F9F80] leading-10 text-base font-medium'>+</div>
                                <div className='color-pink w-10 h-10 text-center leading-10 rounded border border-solid border-[#20202080] text-base font-semibold '>1</div>
                                <div className='color--wedge w-10 h-10 text-center rounded-full border border-solid border-[#9F9F9F80] leading-10 text-base font-medium'>-</div>
                            </div>
                        </div>
                        <div>
                            <span className='text-black font-bold leading-10'>Product Description</span>
                            <div className='text-black leading-5'>
                                K&M Kashmiri Red Chilli Powder is made from the finest chilies grown in the lush green hills of Kashmir. The chilies are sun-dried and then ground into a fine powder. The inner white pith is removed carefully to ensure minimum pungency, with no added preservatives. It has a mild to medium heat perfect for adding flavour, colour and spice to your favourite dishes. It can be used in a variety of dishes, including curries, soups, and stews.. Being a great source of Vitamins A and C, it has been shown to have detoxifying properties. Being rich in iron, potassium and copper, it helps in improving functions of cells. Kashmiri Red Chilli Powder can be stored in a cool, dry place for up to 12 months.
                            </div>
                        </div>
                    </div>
                </div>
                {openModal && (
                    <div className="fixed top-0 right-0 w-full h-full flex items-center justify-end bg-gray-500  bg-opacity-75 z-10">
                        <div
                            className={`relative transform transition-all duration-500 ease-in-out sm:py-3 sm:px-4 gap-10 bg-white shadow-xl h-full sm:w-[431px] max-sm:w-full overflow-hidden
                              ${openModal ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                                }`}
                        >
                            <AddToCart product={product} onclose={handleCloseModal} />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};
export default Shopping;
