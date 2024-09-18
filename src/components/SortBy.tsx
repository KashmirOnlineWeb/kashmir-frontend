import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

type SortTitleType = {
  titleName?: string;
  name?: string;
  id?: string;
};

const SortBy: NextPage<SortTitleType> = ({ titleName, name, id }) => {
  const SortByRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const { category } = router.query;

  const onChange = async () => {
    if (SortByRef.current) {
      await router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          category: SortByRef.current?.id || "All",
        },
      });
    }
  };

  useEffect(() => {}, [category]);

  return (
    <label
      htmlFor={id}
      className="relative flex flex-col bg-white p-2 border-[1px] border-solid border-darkgray rounded-lg cursor-pointer"
    >
      <span className="font-semibold leading-tight uppercase text-center">
        {titleName}
      </span>
      <input
        ref={SortByRef}
        type="radio"
        name={name}
        id={id}
        checked={category === SortByRef.current?.value}
        onChange={onChange}
        className="absolute h-0 w-0 appearance-none"
      />
    </label>
  );
};

export default SortBy;
