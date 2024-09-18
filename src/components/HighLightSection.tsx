import type { NextPage } from 'next';

type HighLightSectionType = {
  highlights?: any;
  hotelpolicy?: boolean;
};

const HighLightSection: NextPage<HighLightSectionType> = ({ highlights, hotelpolicy }) => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-row items-center justify-center mt-8">
          {hotelpolicy && hotelpolicy ?
            <b className="relative color--wedge text-xl leading-[24px] font-bold">Hotel Policies</b> :
            highlights && <b className="relative text-black leading-[24px] font-bold">Highlights</b>
          }
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px] text-inherit font-inherit">
          <div className="flex flex-row items-center justify-center">
            {highlights && <div className="relative leading-[26px] text-black editor-content" dangerouslySetInnerHTML={{ __html: highlights }}>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighLightSection;