import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
// import { getCachedCityData } from '../utils/commonFunctions';
const HoverThingstodo = () => {
    // const cities = getCachedCityData();
    const router = useRouter(); // Initialize the router
    const Options = [
        { label: "Attractions", value: "Attractions" },
    ]

    let getRoute = typeof window !== "undefined" && window.location.href?.split('/')?.[4];

    useEffect(() => {
    }, [getRoute]);

    const handleCitySelection = () => {
            router.push(`#`);
    };

    return (
        <ul className="px-0" role="none">
            {Options && Options.map((city, index) => (
                <li key={index} className='list-none hover:bg-gray-100'>
                    <a
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                        onClick={() => handleCitySelection()}
                        className={`cursor-pointer text-gray-700 py-2 text-sm block px-4 dark:hover:bg-gray-600 hover:text-white ${getRoute === city.value ? 'color-pink' : ''}`}>
                        {city?.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};
export default HoverThingstodo;
