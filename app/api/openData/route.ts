import { NextResponse } from "next/server";
import { EarthquakeArraySchema, EarthquakeSchema } from "@/schema/index";
import { z } from "zod";
interface ApiResponse {
  earthquakeObject?: any;
  success?: boolean;
  status?: number;
  message?: string;
}

// export async function GET(): Promise<ApiResponse> {
//   try {
//     const resonpse = await fetch(
//       "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=CWA-C3FE4FA3-1862-4804-A57B-6019C1642559&limit=100"
//     );
//     const data = await resonpse.json();
//     let result = data.records.Earthquake;
//     const dataStatus = data.success;

//     const earthquakeObjects: z.infer<typeof EarthquakeSchema> = result.map(
//       (earthquake: any) => ({
//         EarthquakeNo: earthquake.EarthquakeNo,
//         ReportContent: earthquake.ReportContent,
//         EarthquakeInfo: {
//           OriginTime: earthquake.EarthquakeInfo.OriginTime,
//           FocalDepth: earthquake.EarthquakeInfo.FocalDepth,
//           EarthquakeMagnitude: {
//             MagnitudeType:
//               earthquake.EarthquakeInfo.EarthquakeMagnitude.MagnitudeType,
//             MagnitudeValue:
//               earthquake.EarthquakeInfo.EarthquakeMagnitude.MagnitudeValue,
//           },
//         },
//       })
//     );

//     return { earthquakeObject: earthquakeObjects, success: dataStatus };
//   } catch (error) {
//     return { message: "Failed to fetch api", status: 403 };
//   }
// }

export async function GET(url: string) {
  const resonpse: any = await fetch(url);
  const data = await resonpse.json();
  let result = data.records.Earthquake;

  const earthquakeObjects: z.infer<typeof EarthquakeArraySchema> = result.map(
    (earthquake: any) => ({
      EarthquakeNo: earthquake.EarthquakeNo,
      ReportContent: earthquake.ReportContent,
      EarthquakeInfo: {
        OriginTime: earthquake.EarthquakeInfo.OriginTime,
        FocalDepth: earthquake.EarthquakeInfo.FocalDepth,
        EarthquakeMagnitude: {
          MagnitudeType:
            earthquake.EarthquakeInfo.EarthquakeMagnitude.MagnitudeType,
          MagnitudeValue:
            earthquake.EarthquakeInfo.EarthquakeMagnitude.MagnitudeValue,
        },
      },
    })
  );
  const dataStatus = data.success;

  return { earthquakeObjects, dataStatus };
}
