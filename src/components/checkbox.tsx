import type { NextPage } from 'next';

type CheckboxTpye = {
  checkboxLabel?: any;
  minValue?: number;
  maxValue?: number;
  season?: any;
  onCheckboxChange?: any;
};

const Checkbox: NextPage<CheckboxTpye> = ({ onCheckboxChange, season, checkboxLabel, minValue, maxValue }) => {
  const handleChange = async () => {
    const checkboxData = {
      checkboxLabel,
      minValue,
      maxValue,
      season,
    };
    // Call the parent function 
    onCheckboxChange(checkboxData);
  };

  return (
    <div className="flex items-center mb-3">
      <input
        id="checked-checkbox"
        onChange={handleChange}
        type="radio"
        className="h-4 w-4 rounded border-2 border-solid border-smokegrey text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor="checked-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {checkboxLabel}
      </label>
    </div>
  );
};
export default Checkbox;
