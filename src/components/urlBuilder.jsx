import React from "react";
import formatParams from "../utilities/formatParam";

export default function UrlBuilder({ formData }) {
  const { rootUrl, campaign, jobName } = formData;

  // Format String Data
  if (rootUrl.charAt(rootUrl.length - 1) === "/") {
    console.log("Hello!");
  }
  const formattedUrl = rootUrl.slice(0, -1);

  // remove spaced

  const newUrl = `${formattedUrl}?utm_campaign=${formatParams(
    campaign
  )}&jobName=${formatParams(jobName)}`;

  return <p className="italic text-sm p-2">{newUrl}</p>;
}
