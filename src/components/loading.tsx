
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Loader = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
        };

        const handleComplete = () => {
            setLoading(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, []);

    return (
        <>
            {loading && (
                <div className=" h-1 loadingBar">
                    <div className=" loadingProgress"></div>
                </div>
            )}
            {/* {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-90 z-10 shadow-2xl">
                    <div
                        className={`relative flex md:flex-row flex-col px-3 py-2 transform transition-all duration-500 ease-in-out sm:py-14 sm:px-14 gap-10 bg-white sm:p-8 rounded-lg shadow-xl h-4/5 w-4/5 overflow-hidden
                             ${loading ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                            }`}
                    >
                        <div className="md:w-2/4">
                            <img className="w-full"
                                src="/assets/images/logo/booklogo.png" alt="logo" />
                        </div>
                        <div className="md:w-2/4">
                            Kashmir has a total area of some 85,800 square miles (222,200 square km), and its climate ranges from subtropical in the southwestern lowlands to alpine throughout the high mountain areas.
                        </div>
                    </div>
                </div>
            )} */}
        </>
    );
};

export default Loader;
