import { EarthquakeSchema } from "@/schema";
import { z } from "zod";

const Item = ({ itemData }: { itemData: z.infer<typeof EarthquakeSchema> }) => {
  const { OriginTime } = itemData.EarthquakeInfo;
  const {EarthquakeNo, ReportContent}= itemData
  const [date, time] = OriginTime.split(" ");

  return (
    <div className=" min-h-20 p-4 rounded-md grid gap-1 bg-slate-50">
      <div className="grid grid-cols-4 gap-2">
        <p>編號：{EarthquakeNo}</p>
        <p>日期：{date}</p>
        <p>時間：{time}</p>
      </div>
      <div>
    {ReportContent.substring(11)}
      </div>
    </div>
  );
};

export default Item;
