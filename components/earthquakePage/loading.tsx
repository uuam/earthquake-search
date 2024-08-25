

import { useEffect, useState } from "react";
import styles from "./loading.module.css";
const LoadingItem = () => {
   
  const [contentRandomWidth,setContentRandomWidth] = useState(0)

  useEffect(() => {
    const min = 50;
    const max = 90;
    const randomWidth = Math.floor(Math.random() * (max - min + 1)) + min;
    setContentRandomWidth(randomWidth);
  }, []);


  return (
    <>
      <div className="min-h-20 p-4 rounded-md grid gap-1 bg-slate-50 ">
        <div className="grid grid-cols-4 gap-2 items-center h-5 w-[100%] min-h-5">
          <p
            className={`${styles.liner} bg-slate-300 rounded-full h-4 relative overflow-hidden`}
          ></p>
          <p
            className={`${styles.liner} bg-slate-300 rounded-full h-4 relative overflow-hidden`}
          ></p>
          <p
            className={`${styles.liner} bg-slate-300 rounded-full h-4 relative overflow-hidden`}
          ></p>
        </div>
        <p
          className={`${styles.liner} bg-slate-300 rounded-full h-4 overflow-hidden relative`}
          style={{ width: `${contentRandomWidth}%` }}
        ></p>
      </div>
    </>
  );
};

export default LoadingItem;
