import { EarthquakeSchema } from "@/schema";
import { lazy, Suspense } from "react";
import { z } from "zod";
import Loading from "./loading";
const Item = lazy(()=> import('./item'))

const EarthquakeItem = ({
  earthquakeData,
}: {
  earthquakeData: z.infer<typeof EarthquakeSchema>;
}) => {

  return (
    <Suspense fallback={<p>loading...</p>}>
     <Item itemData={earthquakeData}/>
    </Suspense>
  );
};

export default EarthquakeItem;
