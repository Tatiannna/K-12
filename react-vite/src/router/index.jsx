import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from "../components/LandingPage"
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import HomePage from "../components/HomePage";
import SelectedGradeLevelPage from '../components/SelectedGradeLevelPage/';
import AssessmentPage from '../components/AssessmentPage/';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginFormPage />,
      },
      {
        path: "/signup",
        element: <SignupFormPage />,
      },
      {
        path: "/home",
        element: <HomePage/>,
      },
      {
        path: "/grade/:gradeLevel",
        element: <SelectedGradeLevelPage/>,
      },
      {
        path: "/grade/:gradeLevel/:subject",
        element: <AssessmentPage/>,
      },
    ],
  },
]);
