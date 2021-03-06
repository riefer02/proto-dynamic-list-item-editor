import React, { useState } from "react";
import ListView from "./listview";
import DetailView from "./detailview";

function AppWrapper() {
  const randomID = () => {
    return Math.floor(Math.random() * Math.floor(10000));
  };

  const [curUTM, setUTM] = useState({});
  const [utmList, updateUTMList] = useState([
    {
      id: randomID(),
      rootUrl: "https://instagram.com/",
      campaign: "My Campaign",
      jobName: "Scientist",
    },
    {
      id: randomID(),
      rootUrl: "https://facebook.com/",
      campaign: "Another Campaign",
      jobName: "Miner",
    },
    {
      id: randomID(),
      rootUrl: "https://twitter.com/",
      campaign: "Trilogy Campaign",
      jobName: "Soldier",
    },
  ]);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  if (isEmpty(curUTM)) return <ListView setUTM={setUTM} utmList={utmList} />;
  if (curUTM)
    return (
      <DetailView
        setUTM={setUTM}
        curUTM={curUTM}
        updateUTMList={updateUTMList}
        utmList={utmList}
      />
    );
}

export default AppWrapper;
