/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';
import ImageLeftPlacement from './image-left-placement';
import ImageRightPlacement from './image-right-placement';
import ThingstodoImagePlacementPlacement from './things-to-do-imageplacement';
import ThingstodoNoImage from './things-to-do-noImage';

type ThingstodoPageType = {
    title?: string;
    subtitle?: string;
    content?: any | TrustedHTML | undefined;
    imageSrc?: string;
};

const ThingstodoPage: NextPage<ThingstodoPageType> = ({
    title,
    subtitle,
    content,
    imageSrc,
}) => {
    const [parseContentState, setParseContentState] = useState<any>(null)
    useEffect(() => {
        if (content?.length > 0) {
            var parseContent = JSON.parse(content)
            setParseContentState(parseContent)
        }
    }, [content])

    return (
        <>
            {parseContentState &&
                parseContentState.map((data: any, index: any) => (
                    <>{ console.log(data,"data")}
                    <div key={index}>
                        {data?.repeater_has_dropdown == true ?
                            <ThingstodoImagePlacementPlacement parseContentState={data} hasImage={data?.repeater_has_dropdown} />
                            :
                            <ThingstodoNoImage parseContentState={data} hasImage={false} />}
                    </div></>
                ))
            }
        </>
    );
};

export default ThingstodoPage;
