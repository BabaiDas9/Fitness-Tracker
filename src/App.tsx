import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FitnessTracker } from './Pages/Home/FitnessTracker';
import { Toaster } from 'react-hot-toast';


  
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <FitnessTracker />,
    }
  ])


export const App = () => {
  return (
    <>
      {/* this Toaster is needed for showing notification */}
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};
