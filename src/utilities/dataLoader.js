const dataLoader=async()=>{
    const fetchedData= await fetch('https://openapi.programming-hero.com/api/quiz')
    const data= await fetchedData.json()
    return data.data;
}
// dynamic data load 
const dynamicDataLoader=async({params})=>{
            const quizData=await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            const resData=await quizData.json()
              return resData.data ;
}
export {
    dataLoader,
    dynamicDataLoader
}