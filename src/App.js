import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:async()=>{
              const fetchedData= await fetch('https://openapi.programming-hero.com/api/quiz')
              const data= await fetchedData.json()
              return data.data
          },
          element:<Home></Home>
        },

        {
          path:'/home',
          loader:async()=>{
            const fetchedData= await fetch('https://openapi.programming-hero.com/api/quiz')
            const data= await fetchedData.json()
            return data.data
        },
          element:<Home></Home>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },

        {
          path:'/blog',
          element:<Blog></Blog>
        },
        
      ]
    },
    {
      path:'/*',
      element:<Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
