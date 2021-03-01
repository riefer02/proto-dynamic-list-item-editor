import React, { useState } from "react";
import Item from "./item";

function DetailView({ setUTM, curUTM, updateUTMList, utmList }) {
  const selectedUTM = curUTM || { id: "newID" };
  const [newUTMList, updateNewUTMList] = useState([selectedUTM]);

  const randomID = () => {
    return Math.floor(Math.random() * Math.floor(10000));
  };

  const newUTM = {
    id: randomID(),
    rootUrl: "",
    campaign: "",
    jobName: "developer",
  };

  const updateMasterUTMList = () => {
    const filteredNewUTMList = newUTMList.filter(
      (item) => item.id !== selectedUTM.id
    );
    updateUTMList((utmList) => [...utmList, ...filteredNewUTMList]);
  };

  return (
    <div className="m-4">
      <button
        className="bg-indigo-200 p-1 rounded-lg shadow-md block"
        onClick={() => {
          setUTM({});
          updateNewUTMList([]);
        }}
      >
        Return to List
      </button>
      <ul>
        {newUTMList.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
      <button
        className="bg-indigo-200 p-1 rounded-lg shadow-md"
        onClick={() => {
          updateNewUTMList((newUTMList) => [...newUTMList, newUTM]);
        }}
      >
        Add New UTM
      </button>
      <button
        className="bg-purple-200 p-1 m-2 rounded-lg shadow-md"
        onClick={() => {
          updateMasterUTMList();
        }}
      >
        Save All New UTM
      </button>
    </div>
  );
}

export default DetailView;
