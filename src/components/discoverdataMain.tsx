/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/navigation';
import type { NextPage } from 'next';
import DiscoverData from './discoverData';
import SectionTitle from './section-title';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllCityThingstodo } from '@/services/thingstodo';
import { useEffect, useState } from 'react';

type DiscoverDataMainType = {
    titleName?: string;
    slug?: any;
}

const DiscoverDataMain: NextPage<DiscoverDataMainType> = ({ titleName, slug }) => {
    // const [thingsSlugState, setThingsSlugState] = useState()
    // useEffect(() => {
    //     const FetchData = async () => {
    //         const data = await getAllCityThingstodo(slug)
    //         if(data?.thingstodo?.length >=0){
    //         setThingsSlugState(data?.thingstodo[0]?.slug)
    //     }}
    //     FetchData()
    // }, [slug])

    const defaultImages = {
        "background": `url("/assets/images/Topdestination/Anantnag/backgroundhistory.jpeg")`,
        "location": `url("/assets/images/Topdestination/Anantnag/Location.jpg")`,
        "hospital": `url("/assets/images/Topdestination/Anantnag/hospital.jpg")`,
        "generalinformation": `url("/assets/images/Topdestination/Anantnag/GeneralInformation.jpg")`,
        "hotel": `url("/assets/images/Topdestination/Anantnag/hotel.jpg")`,
        "howtoreach": `url("/assets/images/Topdestination/Anantnag/howtoreach.jpg")`,
        "sightseeing": `url("/assets/images/Topdestination/Anantnag/Sightseeing.jpg")`,
        "thingstodo": `url("/assets/images/Topdestination/Anantnag/thingstodo.jpg")`,
        "pharmacy": `url("/assets/images/Topdestination/Anantnag/PHARMACY.jpg")`,
        "religious": `url("/assets/images/Topdestination/Anantnag/religious.jpg")`,
        "restaurant": `url("/assets/images/Topdestination/Anantnag/restaurant.jpg")`,
        "safety": `url("/assets/images/Topdestination/Anantnag/Safety.jpg")`,
        "schoolandcollage": `url("/assets/images/Topdestination/Anantnag/schoolandcollage.jpeg")`,
        "shoppingplaces": `url("/assets/images/Topdestination/Anantnag/Shoppingplaces.png")`,
        "thingstobenoted": `url("/assets/images/Topdestination/Anantnag/Thingstobenoted.jpg")`
    };

    const destinations: any = {
        ["anantnag"]: {
            "background": `url("/assets/images/Topdestination/Anantnag/backgroundhistory.jpeg")`,
            "location": `url("/assets/images/Topdestination/Anantnag/Location.jpg")`,
            "hospital": `url("/assets/images/Topdestination/Anantnag/hospital.jpg")`,
            "generalinformation": `url("/assets/images/Topdestination/Anantnag/GeneralInformation.jpg")`,
            "hotel": `url("/assets/images/Topdestination/Anantnag/hotel.jpg")`,
            "howtoreach": `url("/assets/images/Topdestination/Anantnag/howtoreach.jpg")`,
            "sightseeing": `url("/assets/images/Topdestination/Anantnag/Sightseeing.jpg")`,
            "thingstodo": `url("/assets/images/Topdestination/Anantnag/thingstodo.jpg")`,
            "pharmacy": `url("/assets/images/Topdestination/Anantnag/Pharmacy.jpg")`,
            "religious": `url("/assets/images/Topdestination/Anantnag/religious.jpg")`,
            "restaurant": `url("/assets/images/Topdestination/Anantnag/restaurant.jpeg")`,
            "safety": `url("/assets/images/Topdestination/Anantnag/Safety.jpg")`,
            "schoolandcollage": `url("/assets/images/Topdestination/Anantnag/schoolandcollage.jpeg")`,
            "shoppingplaces": `url("/assets/images/Topdestination/Anantnag/Shoppingplaces.png")`,
            "thingstobenoted": `url("/assets/images/Topdestination/Anantnag/Thingstobenoted.jpg")`
        },
        ["gulmarg"]: {
            "background": `url("/assets/images/Topdestination/Gulmarg/Backgroundhistory.jpg")`,
            "location": `url("/assets/images/Topdestination/Gulmarg/Location.jpg")`,
            "hospital": `url("/assets/images/Topdestination/Gulmarg/hospital.jpg")`,
            "generalinformation": `url("/assets/images/Topdestination/Gulmarg/GeneralInformation.jpg")`,
            "hotel": `url("/assets/images/Topdestination/Gulmarg/Hotels.jpg")`,
            "howtoreach": `url("/assets/images/Topdestination/Gulmarg/Howtoreach.jpg")`,
            "pharmacy": `url("/assets/images/Topdestination/Gulmarg/Pharmacy.jpg")`,
            "religious": `url("/assets/images/Topdestination/Gulmarg/Religious.jpg")`,
            "thingstodo": `url("/assets/images/Topdestination/Gulmarg/thingstodo.jpg")`,
            "restaurant": `url("/assets/images/Topdestination/Gulmarg/Restaurant.jpg")`,
            "safety": `url("/assets/images/Topdestination/Gulmarg/safety.jpg")`,
            "schoolandcollage": `url("/assets/images/Topdestination/Gulmarg/schoolandcollage.jpg")`,
            "shoppingplaces": `url("/assets/images/Topdestination/Gulmarg/Shoppingplaces.jpg")`,
            "sightseeing": `url("/assets/images/Topdestination/Gulmarg/Sightseeing.jpg")`,
            "thingstobenoted": `url("/assets/images/Topdestination/Gulmarg/Thingstobenoted.jpg")`
        },
        ["pahalgam"]: {
            "background": `url("/assets/images/Topdestination/Pahalgam/Backgroundhistory.jpeg")`,
            "location": `url("/assets/images/Topdestination/Pahalgam/Location.jpg")`,
            "hospital": `url("/assets/images/Topdestination/Pahalgam/hospital.jpg")`,
            "generalinformation": `url("/assets/images/Topdestination/Pahalgam/GeneralInformation.jpeg")`,
            "hotel": `url("/assets/images/Topdestination/Pahalgam/Hotels.jpg")`,
            "howtoreach": `url("/assets/images/Topdestination/Pahalgam/Howtoreach.jpg")`,
            "pharmacy": `url("/assets/images/Topdestination/Pahalgam/Pharmacy.webp")`,
            "religious": `url("/assets/images/Topdestination/Pahalgam/Religious.jpg")`,
            "thingstodo": `url("/assets/images/Topdestination/Pahalgam/thingstodo.avif")`,
            "restaurant": `url("/assets/images/Topdestination/Pahalgam/Restaurant.jpg")`,
            "safety": `url("/assets/images/Topdestination/Pahalgam/safety.jpg")`,
            "schoolandcollage": `url("/assets/images/Topdestination/Pahalgam/schoolandcollage.jpg")`,
            "shoppingplaces": `url("/assets/images/Topdestination/Pahalgam/Shoppingplaces.png")`,
            "sightseeing": `url("/assets/images/Topdestination/Pahalgam/Sightseeing.jpg")`,
            "thingstobenoted": `url("/assets/images/Topdestination/Pahalgam/Thingtobenoted.jpg")`
        },
        ["sonamarg"]: {
            "background": `url("/assets/images/Topdestination/Sonamarg/Backgroundhistory.jpg")`,
            "location": `url("/assets/images/Topdestination/Sonamarg/Location.jpg")`,
            "hospital": `url("/assets/images/Topdestination/Sonamarg/hospital.jpg")`,
            "generalinformation": `url("/assets/images/Topdestination/Sonamarg/GeneralInformation.jpg")`,
            "hotel": `url("/assets/images/Topdestination/Sonamarg/Hotels.jpg")`,
            "howtoreach": `url("/assets/images/Topdestination/Sonamarg/Howtoreach.jpg")`,
            "pharmacy": `url("/assets/images/Topdestination/Sonamarg/Pharmacy.jpg")`,
            "religious": `url("/assets/images/Topdestination/Sonamarg/Religious.webp")`,
            "thingstodo": `url("/assets/images/Topdestination/Sonamarg/thingstodo.jpg")`,
            "restaurant": `url("/assets/images/Topdestination/Sonamarg/Restaurant.jpg")`,
            "safety": `url("/assets/images/Topdestination/Sonamarg/safety.jpg")`,
            "schoolandcollage": `url("/assets/images/Topdestination/Sonamarg/schoolandcollage.avif")`,
            "shoppingplaces": `url("/assets/images/Topdestination/Sonamarg/Shoppingplaces.jpg")`,
            "sightseeing": `url("/assets/images/Topdestination/Sonamarg/Sightseeing.jpg")`,
            "thingstobenoted": `url("/assets/images/Topdestination/Sonamarg/Thingtobenoted.jpg")`
        },
        ["srinagar"]: {
            "background": `url("/assets/images/Topdestination/Srinagar/Backgroundhistory.jpg")`,
            "location": `url("/assets/images/Topdestination/Srinagar/Location.jpg")`,
            "hospital": `url("/assets/images/Topdestination/Srinagar/hospital.jpeg")`,
            "generalinformation": `url("/assets/images/Topdestination/Srinagar/GeneralInformation.jpg")`,
            "hotel": `url("/assets/images/Topdestination/Srinagar/Hotels.jpg")`,
            "howtoreach": `url("/assets/images/Topdestination/Srinagar/Howtoreach.jpg")`,
            "pharmacy": `url("/assets/images/Topdestination/Srinagar/Pharmacy.jpg")`,
            "religious": `url("/assets/images/Topdestination/Srinagar/Religious.avif")`,
            "thingstodo": `url("/assets/images/Topdestination/Srinagar/thingstodo.jpg")`,
            "restaurant": `url("/assets/images/Topdestination/Srinagar/Restaurants.webp")`,
            "safety": `url("/assets/images/Topdestination/Srinagar/safety.avif")`,
            "schoolandcollage": `url("/assets/images/Topdestination/Srinagar/schoolandcollage.jpg")`,
            "shoppingplaces": `url("/assets/images/Topdestination/Srinagar/Shoppingplaces.jpg")`,
            "sightseeing": `url("/assets/images/Topdestination/Srinagar/Sightseeing.jpg")`,
            "thingstobenoted": `url("/assets/images/Topdestination/Srinagar/Thingtobenoted.jpg")`
        },
        ["yousmarg"]: {
            "background": `url("/assets/images/Topdestination/Yousmarg/Backgroundhistory.jpg")`,
            "location": `url("/assets/images/Topdestination/Yousmarg/Location.jpg")`,
            "hospital": `url("/assets/images/Topdestination/Yousmarg/hospital.jpg")`,
            "generalinformation": `url("/assets/images/Topdestination/Yousmarg/GeneralInformation.jpg")`,
            "hotel": `url("/assets/images/Topdestination/Yousmarg/Hotels.jpg")`,
            "howtoreach": `url("/assets/images/Topdestination/Yousmarg/Howtoreach.jpg")`,
            "pharmacy": `url("/assets/images/Topdestination/Yousmarg/Pharmacy.jpg")`,
            "religious": `url("/assets/images/Topdestination/Yousmarg/Religious.jpg")`,
            "thingstodo": `url("/assets/images/Topdestination/Yousmarg/thingstodo.jpg")`,
            "restaurant": `url("/assets/images/Topdestination/Yousmarg/Restaurant.jpg")`,
            "safety": `url("/assets/images/Topdestination/Yousmarg/safety.jpg")`,
            "schoolandcollage": `url("/assets/images/Topdestination/Yousmarg/schoolandcollage.jpg")`,
            "shoppingplaces": `url("/assets/images/Topdestination/Yousmarg/Shoppingplaces.jpg")`,
            "sightseeing": `url("/assets/images/Topdestination/Yousmarg/Sightseeing.jpg")`,
            "thingstobenoted": `url("/assets/images/Topdestination/Yousmarg/Thingtobenoted.jpg")`
        },
    };
    const cityData = destinations[slug] || defaultImages;
    const thingTodoUrls: any = {
        ["srinagar"]: "/thingstodo/best-things-to-do-in-srinagar",
        ["anantnag"]: "/thingstodo/best-things-to-do-in-anantnag",
        ["pahalgam"]: "/thingstodo/best-things-to-do-in-pahalgam:-outdoor-activities-in-pahalgam",
    };

    const thingsToDoUrl = thingTodoUrls[slug] || `/destination-info/${encodeURIComponent(slug || '')}/${slug}`;

    return (
        <div className="container mx-auto mt-[20px] px-4">
            <SectionTitle
                topTitle={titleName}
                viewAllDisable={false}
                smallTitle={true}
            />
            <div className="box-border w-full mt-8 self-stretch grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-center  gap-[10px] lg:gap-[20px] pb-11 text-left font-others-capitalised text-9xl text-black">
                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/background-history`}>
                    <DiscoverData
                        // frameTitle={destinations[slug]["background"]}
                        frameTitle={cityData.background}
                        name="Background & History"
                        icon="tabler:book"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/location`}>
                    <DiscoverData
                        frameTitle={cityData.location}
                        name="Location"
                        icon="material-symbols:location-on"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug)}/general-information`}>
                    <DiscoverData
                        // frameTitle={destinations[slug]["generalinformation"]}
                        frameTitle={cityData.generalinformation}
                        name="General Information"
                        icon="ri:information-2-line"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/safety-information`}>
                    <DiscoverData
                        frameTitle={cityData.safety}
                        name="Safety Information"
                        icon="mingcute:safety-certificate-line"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/how-to-reach`}>
                    <DiscoverData
                        frameTitle={cityData.howtoreach}
                        name="How to Reach"
                        icon="bx:navigation"
                    /></Link>
                {/* <Link href={thingsToDoUrl }> */}
                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/things-to-do`}>
                    <DiscoverData
                        frameTitle={cityData.thingstodo}
                        name="Things to Do"
                        icon="material-symbols:checklist"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug)}/religious-places`}>
                    <DiscoverData
                        frameTitle={cityData.religious}
                        name="Religious Places"
                        icon="mdi-light:home"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug)}/hotel`}>
                    <DiscoverData
                        frameTitle={cityData.hotel}
                        name="Hotels"
                        icon="material-symbols:hotel"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/sightseeing`}>
                    <DiscoverData
                        frameTitle={cityData.sightseeing}
                        name="Sightseeing"
                        icon="basil:binocular-solid"
                    /></Link>
                {/* 
                <Link href="/houseboats">
                    <DiscoverData
                        frameTitle={`url("/assets/images/discover/Houseboart.jpg")`}
                        name="Houseboats"
                        icon="mdi-light:home"
                    /></Link> */}

                <Link href={`/destination-info/${encodeURIComponent(slug)}/restaurants`}>
                    <DiscoverData
                        frameTitle={cityData.restaurant}
                        name="Restaurants"
                        icon="fluent:food-24-filled"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/hospitals`}>
                    <DiscoverData
                        frameTitle={cityData.hospital}
                        name="Hospitals"
                        icon="mdi:hospital"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/pharmacies`}>
                    <DiscoverData
                        frameTitle={cityData.pharmacy}
                        name="Pharmacies"
                        icon="healthicons:pharmacy"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/shopping-places`}>
                    <DiscoverData
                        frameTitle={cityData.shoppingplaces}
                        name="Shopping Places"
                        icon="mdi:shopping-outline"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/schools-and-colleges`}>
                    <DiscoverData
                        frameTitle={cityData.schoolandcollage}
                        name="Colleges and Schools"
                        icon="material-symbols:school-outline"
                    /></Link>

                <Link href={`/destination-info/${encodeURIComponent(slug || '')}/things-to-be-noted`}>
                    <DiscoverData
                        frameTitle={cityData.thingstobenoted}
                        name="Things to be noted"
                        icon="ic:outline-note-alt"
                    /></Link>

            </div>
        </div>
    );
};

export default DiscoverDataMain;
