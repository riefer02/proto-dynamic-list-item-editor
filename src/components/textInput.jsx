import React, { useState } from "react";

export default function TextInput({
  curValue,
  updateValue,
  formData,
  category,
}) {
  const [value, setValue] = useState(curValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    updateValue({ ...formData, [category]: e.target.value });
  };

  // Send Value to Parent

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="w-1/4 mx-2"
    />
  );
}
