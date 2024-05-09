"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { EarthquakeSchema,EarthquakeArraySchema } from "@/schema/index";
import { z } from "zod";
import EarthquakeItem from "./earthquakeItem";

const PrintData = () => {
  const [resStatus, setResStatus] = useState(false);
  const [resData, setResData] = useState<z.infer<typeof EarthquakeArraySchema>>();

  const getData = async () => {
    const res = await import("../../app/api/openData/route");
    return await res.GET();
  };

  const print = async () => {
    const response = await getData();
    if(response.dataStatus){
      setResData(response.earthquakeObjects)
      console.log('resData',resData)
    }
  };

  return (
    <div className="my-6 flex">
      <Button onClick={print}>取得</Button>
      <div className="grid md:grid-cols-1 gap-4 w-[60%] mt-4">
        {resData && resData.map((item) => (
          <EarthquakeItem key={item.EarthquakeNo} earthquakeData={item} />
        ))}
      </div>
    </div>
  );
};

export default PrintData;
