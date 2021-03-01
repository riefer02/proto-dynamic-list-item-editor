import React, { useState, useEffect } from "react";
import SelectInput from "./selectInput";
import TextInput from "./textInput";
import UrlBuilder from "./urlBuilder";

import campaignOpt from "../config/itemConfig.js";

export default function Item({ item }) {
  // Form State
  const [formData, updateFormData] = useState({
    id: item.id,
    rootUrl: item.rootUrl,
    campaign: item.campaign,
    jobName: item.jobName,
  });

  const { rootUrl, campaign, jobName } = formData;

  // Create Form Input

  // Save Function

  // Duplicate Function

  // UseEffect Build item URL
  useEffect(() => {
    console.log(formData);
  });

  return (
    <li className="bg-red-200 m-2 p-2 block border border-black rounded-lg shadow-md">
      A UTM Item {item.id}
      <div className="bg-gray-100 p-1 rounded-lg shadow-md">
        <TextInput
          curValue={rootUrl}
          updateValue={updateFormData}
          formData={formData}
          category="rootUrl"
        />
        <SelectInput
          curValue={campaign}
          config={campaignOpt}
          updateValue={updateFormData}
          formData={formData}
        />
        {/* <SelectInput
          curValue={jobName}
          config={campaignOpt}
          updateValue={updateFormData}
        /> */}
      </div>
      <UrlBuilder formData={formData} />
    </li>
  );
}
