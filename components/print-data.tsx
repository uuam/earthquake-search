"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const PrintData = () => {
  const [resStatus, setResStatus] = useState(false);
  const [resData, setResData] = useState([]);
  const getData = async () => {
    const res = await import("../app/api/openData/route");
    return await res.GET();
  };

  const print = async () => {
    const response = await getData();
    if (response.success) {
      setResStatus(response.success);
      setResData(response.earthquakeObject);
    }
  };

  return (
    <div>
      <Button onClick={print}>取得</Button>
      {resStatus ? (
        resData.map((item) => (
          <div key={item.EarthquakeNo}>
            <p>{item.EarthquakeNo}</p>
            <p>{item.EarthquakeInfo.OriginTime}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PrintData;
