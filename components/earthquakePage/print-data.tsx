"use client";

import { useState } from "react";
import { EarthquakeArraySchema } from "@/schema/index";
import { z } from "zod";
import EarthquakeItem from "./earthquakeItem";

import ShowButton from "../ui/show-button";
import { getData } from "@/app/utils/getData";

const PrintData = () => {
  const [resData, setResData] = useState<z.infer<typeof EarthquakeArraySchema>>(
    []
  );
  const recentlyBigEarthQuakeApiUrl = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=CWA-C3FE4FA3-1862-4804-A57B-6019C1642559&limit=100";

  const recentlySmallEarthQuakeApiUrl = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0016-001?Authorization=CWA-C3FE4FA3-1862-4804-A57B-6019C1642559&format=JSON'

  const print = async (url: string) => {
    setResData([])
    const response = await getData(url);
    if (response.dataStatus) {
      setResData(response.earthquakeObjects);
    }
  };
  return (
    <div className="flex flex-col items-center xl:w-8/12 w-11/12 mx-auto my-2">
      <div className="grid grid-flow-col gap-4">
      <ShowButton className="" onClick={()=>{print(recentlyBigEarthQuakeApiUrl)}} buttonName="近期有感地震" />
      <ShowButton className="" onClick={()=>{print(recentlySmallEarthQuakeApiUrl)}} buttonName="近期小規模地震" />
      </div>
      
      <div className="grid md:grid-cols-1 gap-4 sm:w-[80%] w-[90%] text-sm md:text-base mt-4">
        {resData &&
          resData.map((item) => (
            <EarthquakeItem key={item.EarthquakeNo} earthquakeData={item} />
          ))}
      </div>
    </div>
  );
};

export default PrintData;
