/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

interface PaginationProps {
  pageCount: number;
}

// export const Pagination: React.FC<PaginationProps> = (props) => {
//   const router = useRouter();
//   const [qpage, setQpage] = useState(1);
//   const [steps, setSteps] = useState<number[]>();
//
//   const numberOfButtons = 4;
//   const page = props.pageCount; // Use the actual page count from props
//
//   const pageArray = Array.from({ length: page }, (_, index) => index + 1);
//   const firstElement = pageArray.shift();
//   const lastElement = pageArray.pop();
//
//   const getNumbersAround = (a: number, n: number): number[] => {
//     if (n % 2 === 0) {
//       n++;
//     }
//
//     return Array.from({ length: n }, (_, index) =>
//       Math.max(1, a - Math.floor(n / 2) + index)
//     );
//   };
//
//   const condition = (pageNumber: number) => {
//     if (pageNumber <= numberOfButtons) {
//       setSteps(pageArray.slice(0, numberOfButtons));
//     } else if (pageNumber >= (lastElement as number) - numberOfButtons) {
//       setSteps(pageArray.slice(-numberOfButtons));
//     } else {
//       setSteps(getNumbersAround(pageNumber, numberOfButtons));
//     }
//   };
//
//   useLayoutEffect(() => {
//     condition(qpage);
//     // Update the URL with the new page using router.push
//     router.push({
//       pathname: router.pathname,
//       query: {
//         ...router.query,
//         page: qpage,
//       },
//     });
//   }, [qpage, router]);
//
//   return (
//     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-0 py-3 pt-[40px] sm:px-0">
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
//         <div>
//           <nav
//             className="isolate inline-flex gap-1.5 -space-x-px rounded shadow-sm"
//             aria-label="Pagination"
//           >
//             <a
//               href="#"
//               className={`relative inline-flex items-center rounded bg-gray-50 p-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${
//                 qpage === firstElement ? "bg-blue-700" : "bg-amber-300"
//               }`}
//               onClick={() => setQpage(firstElement as number)}
//             >
//               <span className="sr-only">Previous</span>
//               <svg
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="#C4CDD5"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//             {qpage > numberOfButtons && <div>...</div>}
//             {steps &&
//               steps.map((value, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className={`relative inline-flex items-center rounded px-4 py-2 text-sm font-semibold no-underline ring-1 ring-inset ring-gray-300 focus:outline-offset-0 ${
//                     qpage === value ? "bg-blue-700" : "bg-amber-300"
//                   }`}
//                   onClick={() => setQpage(value)}
//                 >
//                   {value}
//                 </a>
//               ))}
//             {!(qpage >= (lastElement as number) - numberOfButtons) && (
//               <div>...</div>
//             )}
//             <a
//               href="#"
//               className={`relative inline-flex items-center rounded px-4 py-2 text-sm font-semibold no-underline ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
//                 qpage === lastElement ? "bg-blue-700" : "bg-amber-300"
//               }`}
//               onClick={() => setQpage(lastElement as number)}
//             >
//               {lastElement}
//             </a>
//             <a
//               href="#"
//               className={`relative inline-flex items-center rounded p-2 text-gray-400 no-underline ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
//             >
//               <span className="sr-only">Next</span>
//               <svg
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };
// import React, { useLayoutEffect, useState } from "react";
// import { PaginationProps } from "@/components/pagination/type";

export const Pagination: React.FC<PaginationProps> = (props) => {
  const [qpage, setQpage] = useState(1);
  const [steps, setSteps] = useState<number[]>();

  //how much button needed in center  4 : 4
  const [numberOfButtons, setNumberOfButtons] = useState<number>(4);

  const page: number = 50;

  const pageArray: number[] = Array.from(
    { length: page },
    (_, index) => index + 1
  );

  const firstElement = pageArray.shift();
  const lastElement = pageArray.pop();
  function getNumbersAround(a: number, n: number): number[] {
    if (n % 2 === 0) {
      n++;
    }

    return Array.from(
      { length: n },
      (_, index) => a - Math.floor(n / 2) + index
    );
  }
  const condition = (pageNumber: number) => {
    switch (true) {
      case pageNumber < numberOfButtons:
        let lessValue = pageArray.filter((value) => value <= numberOfButtons);
        setSteps(lessValue);
        break;
      case pageNumber > (lastElement as number) - numberOfButtons:
        let greaterValue = pageArray.filter(
          (value) => value >= (lastElement as number) - numberOfButtons
        );
        setSteps(greaterValue);
        break;
      default:
        setSteps(getNumbersAround(qpage, numberOfButtons));
        break;
    }
  };

  useLayoutEffect(() => {
    condition(qpage);
  }, [qpage]);

  return (
    <>
      <div
        className={
          "min-w-[10px] w-auto  flex flex-row items-center justify-end mt-5 gap-3"
        }
      >
        <button
          className={`w-8 h-8 p-1 ${qpage === firstElement ? "bg-pink" : "bg-white"
            }`}
          onClick={() => setQpage(firstElement as number)}
        >
          {firstElement}
        </button>
        {qpage > numberOfButtons - 1 && <div>...</div>}
        {steps &&
          steps.map((value, index) => (
            <button
              className={`w-8 h-8 p-1 ${qpage === value ? "bg-pink" : "bg-white"
                }`}
              onClick={() => {
                setQpage(value);
              }}
              key={index}
            >
              {value}
            </button>
          ))}

        {!(qpage >= (lastElement as number) - numberOfButtons) && (
          <div>...</div>
        )}
        <button
          className={`w-8 h-8 p-1 ${qpage === lastElement ? "bg-pink" : "bg-white"
            }`}
          onClick={() => setQpage(lastElement as number)}
        >
          {lastElement}
        </button>
      </div>

      <br />
      <p>{qpage}</p>
    </>
  );
};
