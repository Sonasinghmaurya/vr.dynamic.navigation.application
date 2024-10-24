
import React from 'react';

interface FilterButtonProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label, isActive = false }) => {
  const baseClasses = "flex flex-col justify-center px-3.5 py-3 text-xs font-medium tracking-normal rounded-[100px]";
  const activeClasses = isActive ? "text-white bg-blue-700" : "text-blue-700 border border-blue-700 border-solid";

  return (
    <button className={`${baseClasses} ${activeClasses}`}>
      <div className="flex gap-1.5 items-start">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-square w-[13px]" />
        <span>{label}</span>
      </div>
    </button>
  );
};

export default FilterButton;
