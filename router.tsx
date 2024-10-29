import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import links from './src/links/links';
import Home from './src/pages/Home';
import PageNotFound from './src/pages/PageNotFound';

const routerLinks = [
  {
    path: '/',
    element: <Home />,
  },
  ...links.map(({ link, element }) => {
    return {
      path: link,
      element: element,
    };
  }),
  {
    path: '*',
    element: <PageNotFound />,
  },
];
const router = createBrowserRouter([...routerLinks]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
