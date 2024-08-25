export const getData = async(url:string) => {
    const res = await import('../api/openData/route')
    return await res.GET(url)
}
 
 