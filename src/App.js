import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';
import dataLoader from './utilities/dataLoader';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:dataLoader,
          element:<Home></Home>
        },

        {
          path:'/home',
          loader:dataLoader,
          element:<Home></Home>
        },
        {
          path:'/statistics',
          loader:dataLoader,
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
