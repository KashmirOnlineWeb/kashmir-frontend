import React, { forwardRef } from "react";

interface CheckboxV2Props extends React.InputHTMLAttributes<HTMLInputElement> {}

// eslint-disable-next-line react/display-name
export const CheckboxV2 = forwardRef<HTMLInputElement, CheckboxV2Props>(
  (props, ref) => {
    return (
      <div className="flex items-center">
        <input
          type="radio"
          className="h-4 w-4 rounded border-2 border-solid border-smokegrey text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          {...props}
          ref={ref}
        />
        <label
          htmlFor={props.id}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {String(props.id)}
        </label>
      </div>
    );
  }
);
