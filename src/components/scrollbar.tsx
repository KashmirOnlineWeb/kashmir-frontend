import { NextPage } from "next";
import Link from "next/link";
import PackageIcon from "./packageIcon";
import { SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

type Scrollbartype = {
    city?: any;
}
export const ScrollBar: NextPage<Scrollbartype> = ({ city }) => {
    const router = useRouter();
    const path = router.asPath;
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const tabs = [
        { id: 'background-history', label: 'Background & History', link: `/destination-info/${encodeURIComponent(city)}/background-history`, icon: 'tabler:book' },
        { id: 'location', label: 'Location', link: `/destination-info/${encodeURIComponent(city)}/location`, icon: 'material-symbols:location-on' },
        { id: 'general-information', label: 'General Information', link: `/destination-info/${encodeURIComponent(city)}/general-information`, icon: 'ri:information-2-line' },
        { id: 'safetyinformation', label: 'Safety Information', link: `/destination-info/${encodeURIComponent(city)}/safetyinformation`, icon: 'mingcute:safety-certificate-line' },
        { id: 'howtoreach', label: 'How to Reach', link: `/destination-info/${encodeURIComponent(city)}/howtoreach`, icon: 'bx:navigation' },
        { id: 'thingstodo', label: 'Things to Do', link: `/destination-info/${encodeURIComponent(city)}/${city}`, icon: 'material-symbols:checklist' },
        { id: 'religiousplaces', label: 'Religious Places', link: `/destination-info/${encodeURIComponent(city)}/religiousplaces`, icon: 'material-symbols:location-on' },
        { id: 'hotels', label: 'Hotels', link: `/destination-info/${encodeURIComponent(city)}/hotel`, icon: 'material-symbols:hotel' },
        { id: 'sightseeing', label: 'Sightseeing', link: `/destination-info/${encodeURIComponent(city)}/sightseeing`, icon: 'basil:binocular-solid' },
        // { id: 'houseboats', label: 'Houseboats', link: '/houseboats', icon: 'material-symbols:location-on' },
        { id: 'restaurants', label: 'Restaurants', link: `/destination-info/${encodeURIComponent(city)}/restaurants`, icon: 'fluent:food-24-filled' },
        { id: 'hospitals', label: 'Hospitals', link: `/destination-info/${encodeURIComponent(city)}/hospitals`, icon: 'mdi:hospital' },
        { id: 'pharmacies', label: 'Pharmacies', link: `/destination-info/${encodeURIComponent(city)}/pharmacies`, icon: 'healthicons:pharmacy' },
        { id: 'shoppingplaces', label: 'Shopping Places', link: `/destination-info/${encodeURIComponent(city)}/shoppingplaces`, icon: 'mdi:shopping-outline' },
        { id: 'collagesandschools', label: 'Collages and Schools', link: `/destination-info/${encodeURIComponent(city)}/schoolsandcollages`, icon: 'material-symbols:school-outline' },
        { id: 'thingstobenoted', label: 'Things to be noted', link: `/destination-info/${encodeURIComponent(city)}/thingstobenoted`, icon: 'ic:outline-note-alt' },
    ];

    return (
        <>
            <nav className={`z-10 bg-white border-b border-gray-200 ${isSticky ? 'fixed top-0 left-0 w-full' : ''}`}>
                <ul className=" pb-1 items-center gap-8 lg:gap-[60px] flex-nowrap text-sm font-medium text-center
                 h-[123px] md:h-[143px] px-4 md:px-16 lg:px-[80px] flex overflow-y-hidden overflow-x-auto border-[#d9dbe2] border-2 border-solid
                " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    {tabs.map((tab) => (
                        <li className={` inline-block relative custom-hover`} key={tab.id} role="presentation">
                            <Link href={tab.link} className="w-[80px] no-underline h-[84px] inline-block">
                                <PackageIcon className={`${path === tab.link ? "color-pink font-bold" : "color--wedge "}`} groupName={tab.icon} />
                                <div
                                    className={`mt-1 ${path === tab.link ? "color-pink font-bold" : "color--wedge "} rounded-t-md bg-white  hover:border-gray-300 hover:text-pink md:text-[14px] text-[12px] leading-[22px] font-bold`}
                                    id={`${tab.id}-tab`}
                                    data-tabs-target={`#${tab.id}`}
                                    aria-controls={tab.id}
                                    aria-selected="false"
                                >
                                    {tab.label}
                                </div>
                            </Link>

                            {path === tab.link && (
                                <div className="border-2 w-[100px] md:w-[132px] bottom-[-1.07rem] -left-2 md:-bottom-7 md:-left-5 border-solid absolute border-red-500" />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}