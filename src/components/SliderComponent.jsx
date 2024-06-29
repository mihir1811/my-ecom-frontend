import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SliderComponent = ({ title, min, max, step, value, onChange, unit }) => (
  <div>
    {/* <h3 className="filter-title">
      {title}: {value[0]} - {value[1]} {unit}
    </h3> */}
    <h3 className="filter-title">{title}</h3>
    <p>
      {value[0]} - {value[1]} {unit}
    </p>
    <Slider
      range
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SliderComponent;
