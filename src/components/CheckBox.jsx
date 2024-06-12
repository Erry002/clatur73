import React from "react";
// import "./CheckBox.css";

const Checkbox = ({ isChecked, onChange, title,label }) => {
  return (
    <div className=" flex justify-center items-center my-2">
      <input
        required
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        title={title}
        className="h-5 w-5 accent-olive/90"
      />
      <label className="ml-2">{label} <span className=" text-olive">*</span></label>
    </div>
  );
};

export default Checkbox;
