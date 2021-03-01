import React, { useState } from "react";

export default function selectInput({
  curValue,
  config,
  updateValue,
  formData,
}) {
  const [value, setValue] = useState(curValue);
  const { category, options } = config;

  const optionsList = options.map((opt) => {
    return (
      <option key={opt} value={opt}>
        {opt}
      </option>
    );
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    updateValue({ ...formData, [category]: e.target.value });
  };

  // Return Value to Parent

  return (
    <div className="p-2 inline-block">
      <select className="w-40" value={value} onChange={handleChange}>
        {optionsList}
      </select>
    </div>
  );
}
