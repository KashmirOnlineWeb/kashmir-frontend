import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { getCachedCityData } from '../utils/commonFunctions';
const HoverCity = () => {
    const cities = getCachedCityData();
    const router = useRouter(); // Initialize the router
    let getRoute = typeof window !== "undefined" && window.location.href?.split('/')?.[4];
    useEffect(() => {
    }, [getRoute]);

    const handleCitySelection = (city: any) => {
        router.push(`/destination/${city?.slug}`);
    };

    return (
  
        <ul className="px-0" role="none">
        {cities && cities
           .filter((value: { switch_toggle: any; }) => value?.switch_toggle)
            .map((city: { slug: string | boolean; city_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
                <li key={index} className='list-none hover:bg-gray-100'>
                        <a
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                            onClick={() => handleCitySelection(city)}
                            className={`cursor-pointer text-gray-700 py-2 text-sm block px-4 dark:hover:bg-gray-600 hover:text-white ${getRoute === city.slug ? 'color-pink' : ''}`}>
                            {city?.city_name}
                        </a>
                    </li>
            ))}
    </ul>
    );
};
export default HoverCity;
