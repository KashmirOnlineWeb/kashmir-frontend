/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';
import ImageLeftPlacement from './image-left-placement';
import ImageRightPlacement from './image-right-placement';

type BackgroundPageType = {
    title?: string;
    subtitle?: string;
    content?: any | TrustedHTML | undefined;
    imageSrc?: string;
};

const BackgroundPage: NextPage<BackgroundPageType> = ({
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
                    <div key={index}>
                        {data?.repeater_placement_dropdown == "Right"
                            ?
                            <ImageRightPlacement parseContentState={data} hasImage={data?.repeater_has_dropdown} />
                            :
                            <ImageLeftPlacement parseContentState={data} hasImage={data?.repeater_has_dropdown} />}
                    </div>
                ))
            }
        </>
    );
};

export default BackgroundPage;
