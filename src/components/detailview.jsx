import React, { useState } from "react";

function DetailView({ setUTM, curUTM, updateUTMList, utmList }) {
  const selectedUTM = curUTM || { id: "newID" };
  const [newUTMList, updateNewUTMList] = useState([selectedUTM]);

  const randomID = () => {
    return Math.floor(Math.random() * Math.floor(10000));
  };

  const newUTM = {
    id: randomID(),
  };

  const updateMasterUTMList = () => {
    const filteredNewUTMList = newUTMList.filter(
      (item) => item.id !== selectedUTM.id
    );
    updateUTMList((utmList) => [...utmList, ...filteredNewUTMList]);
  };

  return (
    <div>
      Detail Look at UTM: {selectedUTM.id}
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
          return (
            <li
              className="bg-red-200 m-2 p-2 block border border-black"
              key={item.id}
            >
              A UTM Item {item.id}
            </li>
          );
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
