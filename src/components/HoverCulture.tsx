import { Key, useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { getCachedCultureData } from '../utils/commonFunctions';

const HoverCulture = () => {
    const cultures = getCachedCultureData();
    const router = useRouter(); // Initialize the router
    const Options = [
        { label: "CUISINE", value: "listing?tab=package" },
        { label: "RELIGIOUS PLACES", value: "hotel?tab=package" },
        { label: "HERITAGE & HISTORICAL PLACES", value: "#" },
        { label: "MUSIC", value: "#" },
        { label: "DANCES", value: "#" },
        { label: "DRESSES", value: "#" },
        { label: "ARTS AND CRAFTS", value: "#" },
    ]
    let getRoute = typeof window !== "undefined" && window.location.href?.split('/')?.[4];

    useEffect(() => {
    }, [getRoute]);

    const handleCultureSelection = (data: any) => {
        if (data?.label) {
            alert("Coming soon...")
            return
        }
        // router.push(`/culture/${data?.value}`);
    };

    // const handleCitySelection = (city: any) => {
    //     router.push(`/culture/${city.slug}`);
    // };

    return (
        <ul className="px-0" role="none">
            {Options && Options?.map((data: any, index: number) => (
                <li key={index} className='list-none hover:bg-gray-100' onClick={() => handleCultureSelection(data)}>
                    <div
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0" className={`cursor-pointer text-gray-700 py-2 text-sm block px-4  dark:hover:bg-gray-600 hover:text-white ${getRoute === data?.slug ? 'color-pink' : ''} `}>{data?.label}</div>
                </li>
            ))}
        </ul>
    );
};
export default HoverCulture;
