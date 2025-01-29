import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroSection from './Pages/Home/FitnessTracker';
import { Toaster } from 'react-hot-toast';
import { FitnessTracker1 } from './Pages/Home/FitnessTracker1';
import { SignUpForm } from './Pages/Authentication/SignUp/SignUpFrom';
import { LoginForm } from './Pages/Authentication/Login/login';
import DashBoard from './Pages/DashBoard/DashBoard';
import { WorkOutPlan } from './Pages/Workout/WorkOutPlan';


  
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <HeroSection />,
    },
    {
      path: "/FitnessTracker",
      element: <FitnessTracker1 />,
    },

    {
      path: "/signUp",
      element: <SignUpForm />,
    },
    {
      path: "/logIn",
      element: <LoginForm />,
    },
    {
      path: "/DashBoard",
      element: <DashBoard />,
    },
    {
      path: "/Workout/WorkoutPlan",
      element: <WorkOutPlan />,
    },
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
