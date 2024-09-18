/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

type LocationType = {

};

const Location: NextPage = () => {

    return (<div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-start gap-[16px] text-black text-lg mb-[120px]">
            <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[28px]">Pahalgam on the map</b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-[22px] bg-whitesmoke h-[322px] flex flex-col items-start justify-start p-2 box-border relative gap-[8px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.43257278179!2d75.3156245!3d34.01040505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1697183055480!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>
        </div>
    </div>);

}

export default Location;