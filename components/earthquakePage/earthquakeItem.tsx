import { EarthquakeSchema } from "@/schema";
import { lazy, Suspense, useEffect, useState } from "react";
import { z } from "zod";

import LoadingItem from "./loading";
const ItemDetail = lazy(() => import("./earthquake-detail"));

const EarthquakeItem = ({
  earthquakeData,
}: {
  earthquakeData: z.infer<typeof EarthquakeSchema>;
}) => {
  const [loading, setLoading] = useState(true); // 控制loading顯示狀態

  useEffect(() => {
    setLoading(true); // 模擬開始加載
    // 模擬加載時間，這裡可以是實際加載資料的代碼
    const timer = setTimeout(() => {
      setLoading(false); // 加載完成，隱藏loading
    }, 1500); // 假設加載時間為2秒

    return () => clearTimeout(timer); // 清除計時器，避免內存洩露
  }, [earthquakeData]); // 依賴於 earthquakeData 的變化

  return (
    // <Suspense fallback={<LoadingItem  />}>
    //  <Item itemData={earthquakeData}/>
    // </Suspense>
    <div>
      {loading ? <LoadingItem /> : <ItemDetail itemData={earthquakeData} />}
    </div>
  );
};

export default EarthquakeItem;
