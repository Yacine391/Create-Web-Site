import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Demo from './pages/Demo.jsx';
import YellLabDemo from './pages/YellLabDemo.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'categorie/:slug', element: <Category /> },
      ],
    },
    { path: 'demo/:slug/:demoId', element: <Demo /> },
    {
      path: '/yell-lab',
      element: <YellLabDemo />,
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  },
);

export default router;
