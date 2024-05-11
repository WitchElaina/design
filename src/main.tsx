import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './pages/ListPage.tsx';
import Timer from './demo/Timer.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListPage />,
  },
  {
    path: '/list',
    element: <ListPage />,
  },
  {
    path: '/timer',
    element: <Timer />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
