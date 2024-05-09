export async function GET() {
  const data: any = await fetch(
    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=CWA-C3FE4FA3-1862-4804-A57B-6019C1642559&limit=100"
  );
  const result = await data.json()

  return new Response(JSON.stringify(result))
}
