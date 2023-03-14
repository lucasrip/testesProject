import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import Home from './src/pages/Home/index';
import Projects from './src/pages/Projects';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/projects',
    element: <Projects/>
  }
]);


export default function Routes ()
{
  return <RouterProvider router={router}/>;
}