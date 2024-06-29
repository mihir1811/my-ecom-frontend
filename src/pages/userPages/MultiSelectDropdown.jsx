import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { MdCancel } from "react-icons/md";


const MultiSelectDropdown = ({
  options,
  selectedValues,
  onChange,
  placeholder,
}) => {
  const handleSelect = (option) => {
    onChange(option.value);
  };

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleSelect}
        placeholder={placeholder}
      />
      <div className="selected-options">
        {selectedValues.map((value, index) => (
          <span key={index} className="selected-option flex items-center">
            {value}
            <button onClick={() => onChange(value)} className="remove-btn">
              <MdCancel size={18} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
