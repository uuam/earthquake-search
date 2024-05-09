import { z } from "zod";

export const EarthquakeSchema = z.object({
  EarthquakeNo: z.number(),
  ReportContent: z.string(),
  EarthquakeInfo: z.object({
    OriginTime: z.string(),
    FocalDepth: z.number(),
    EarthquakeMagnitude: z.object({
      MagnitudeType: z.string(),
      MagnitudeValue: z.number(),
    }),
  }),
});
export const EarthquakeArraySchema = EarthquakeSchema.array();
