import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { getCachedCityData } from '../utils/commonFunctions';
const HoverReligiousTourism = () => {
    const cities = getCachedCityData();
    const router = useRouter(); // Initialize the router
    const Options = [
        { label: "Amarnath", value: "amarnath" },
        { label: "Vaishno Devi", value: "vaishno-devi" }, // Changed value to match URL structure
        { label: "Islamic Sites", value: "islamic-sites" }, // Changed value to match URL structure
    ]

    let getRoute = typeof window !== "undefined" && window.location.href?.split('/')?.[4];

    useEffect(() => {
    }, [getRoute]);

    const handleCitySelection = (city: { label?: string; value: any; }) => {
        if (city?.value) {
            router.push(`/destination/${city?.value}`);
        }
    };

    return (
        <ul className="px-0" role="none">
            {Options && Options.map((city, index) => (
                <li key={index} className='list-none hover:bg-gray-100'>
                    <a
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                        onClick={() => handleCitySelection(city)}
                        className={`cursor-pointer text-gray-700 py-2 text-sm block px-4 dark:hover:bg-gray-600 hover:text-white ${getRoute === city.value ? 'color-pink' : ''}`}>
                        {city?.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};
export default HoverReligiousTourism;
