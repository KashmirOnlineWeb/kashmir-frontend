import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface CheckboxGroupProps {
  keyOfFilter: string;
  label: string | number;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const router = useRouter();
  const selectedValues = Array.isArray(router.query[props.keyOfFilter])
    ? router.query[props.keyOfFilter]
    : [router.query[props.keyOfFilter]].filter(Boolean);

  const isSelected = selectedValues?.includes(props.label.toString());

  const handleClick = async () => {
    const newQuery = { ...router.query };

    if (isSelected) {
      const updatedValues = (selectedValues as string[])?.filter(
        (value: string) => value !== props.label.toString()
      );
      if (updatedValues.length === 1) {
        newQuery[props.keyOfFilter] = updatedValues[0];
      } else if (updatedValues.length > 1) {
        newQuery[props.keyOfFilter] = updatedValues;
      } else {
        delete newQuery[props.keyOfFilter];
      }
    } else {
      newQuery[props.keyOfFilter] = [
        ...(selectedValues as string[]),
        encodeURI(props.label.toString()),
      ];
    }

    await router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  useEffect(() => { }, [router.query[props.keyOfFilter]]);

  return (
    <div
      onClick={handleClick}
      className={`select-none cursor-pointer flex flex-row items-center max-sm:justify-center justify-start gap-3 w-full p-2 max-sm:gap-[6px] max-sm:border-[1px] max-sm:border-solid max-sm:border-darkgray max-sm:rounded-lg`}
    >
      {isSelected ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={`${isSelected ? "#DD1045" : "#0000ff"}`}
          className="w-8 h-8 max-sm:hidden"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 max-sm:hidden color--wedge"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}

      <p className={`${isSelected ? "color-pink" : "color--wedge"}`}>
        {props.label}
      </p>
    </div>
  );
};
