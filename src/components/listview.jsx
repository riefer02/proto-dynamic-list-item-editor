import React, { useState } from "react";

function ListView({ setUTM, utmList }) {
  const randomID = () => {
    return Math.floor(Math.random() * Math.floor(10000));
  };

  return (
    <div>
      There is no current UTM!
      <button
        className="bg-indigo-200 p-1 rounded-lg shadow-md block"
        onClick={() => {
          setUTM({ id: randomID() });
        }}
      >
        Create UTM
      </button>
      <ul>
        {utmList.map((item) => {
          return (
            <li className="bg-red-200 m-2 p-2 block" key={item.id}>
              A UTM Item {item.id}
              <button
                className="m-2 bg-yellow-100 shadow-md rounded-lg p-2"
                onClick={() => {
                  setUTM(item);
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListView;
