const dataLoader=async()=>{
    const fetchedData= await fetch('https://openapi.programming-hero.com/api/quiz')
    const data= await fetchedData.json()
    return data.data;
}
export default dataLoader;