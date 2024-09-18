import { Key, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import SocialSection from './social-section';

const HoverService = () => {
    const router = useRouter(); // Initialize the router
    const baseUrl = window.location.origin;
    const Options = [
        { label: "PACKAGES", value: "listing?tab=package" },
        { label: "HOTELS", value: "hotel?tab=package" },
        { label: "HOUSE BOATS", value: "#" },
        { label: "HUTS", value: "#" },
        { label: "FLIGHTS", value: "#" },
        { label: "BUSES & TRAINS", value: "#" },
        { label: "TAXIES", value: "#" },
        { label: "SHIKARA", value: "#" },
    ]

    let getRoute = typeof window !== "undefined" && window.location.href?.split('/').slice(3).join('/');
    useEffect(() => {
    }, [getRoute]);

    const handleCitySelection = (data: any) => {
        if (data?.label === "PACKAGES" || data?.label === "HOTELS") {
            router.push(`${baseUrl}/${data?.value}`);
        } else {
            alert("comming soon...")
        }
    };

    return (
        <ul className="px-0" role="none">
            {Options && Options?.map((data, index) => (
                <li key={index} className='list-none hover:bg-gray-100'>
                    <a
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0" onClick={() => handleCitySelection(data)} className={`cursor-pointer text-gray-700 py-2 text-sm block px-4 dark:hover:bg-gray-600 hover:text-white ${getRoute === data.value ? 'color-pink' : ''}`}>{data?.label}</a>
                </li>
            ))}
        </ul>
    );
};
export default HoverService;
