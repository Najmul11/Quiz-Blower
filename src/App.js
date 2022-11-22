import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Topics from './components/Topics/Topics';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';
import {  dataLoader, dynamicDataLoader } from './utilities/dataLoader';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:dataLoader,
          element:<Topics></Topics>
        },

        {
          path:'/Topics',
          loader:dataLoader,
          element:<Topics></Topics>
        },
        {
          path:'quiz/:id',
          loader:dynamicDataLoader,
          element:<Quiz></Quiz>
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
