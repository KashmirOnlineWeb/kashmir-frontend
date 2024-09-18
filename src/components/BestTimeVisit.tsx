import type { NextPage } from "next";
import BestTimeCard from "./BestTimeCard";
import { useSelector } from "react-redux";
import { Key } from "react";

type BestTimeVisitType = {
  containerClass?: string;
  title?: string;
  sub_title?: string;
  timePeriods?: string;
  add_more_things?: string;
  vectorImageUrl?: string;
  vectorLabel?: string;
  customStyle?: any;
};

const BestTimeVisit: NextPage<BestTimeVisitType> = ({
  containerClass,
  timePeriods,
  sub_title,
  title,
  add_more_things,
  vectorImageUrl,
  vectorLabel,
  customStyle,
}) => {
  return (
      <div
        className={`self-stretch w-full flex flex-col items-start justify-start gap-[16px] text-left text-lg text-black font-others-capitalised ${customStyle}`}
      >
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-base">
          <BestTimeCard
            timePeriods={timePeriods}
            sub_title={sub_title}
            title={title}
            add_more_things={add_more_things}
            vectorImageUrl={vectorImageUrl}
            vectorLabel={vectorLabel}
            customStyle={{ minHeight: "255px" }}
          />
        </div>
      </div>
  );
};
export default BestTimeVisit;
