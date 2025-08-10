import { createBrowserRouter, } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import FindTutor from "../Pages/FindTutor/FindTutor";
import FindTutorCategory from "../Pages/FindTutorCategory/FindTutorCategory";
import TutorDetails from "../Pages/TutorDetails/TutorDetails";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors/MyBookedTutors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivetRoute from "../Routes/PrivetRoute";
import UpdateTutorial from "../Pages/MyTutorials/UpdateTutorial";
import CategoryTutors from "../Pages/CategoryTutors/CategoryTutors";
import FAQ from "../Pages/FAQ/FAQ";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <div className="flex justify-center my-30">
          <span className="loading loading-spinner flex justify-center loading-xl"></span>
        </div>,

      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      // {
      //   path: '/find-tutors/:category ',
      //   element: <CategoryTutors></CategoryTutors>,
      // },
      {
        path: '/find-tutors',
        Component: FindTutor,
        hydrateFallbackElement: <div className="flex justify-center my-30">
          <span className="loading loading-spinner flex justify-center loading-xl"></span>
        </div>,
      },
      {
        path: '/find-tutors/:category',
        Component: FindTutorCategory
      },
      {
        path: '/FAQ',
        Component: FAQ
      },
      {
        path: '/tutor-details/:id',
        element: <TutorDetails></TutorDetails>,
        loader: () => fetch("https://language-exchange-server-plum.vercel.app/tutors").then((res) => res.json()),
      },
      {
        path: '/add-tutorial',
        element: <AddTutorials></AddTutorials>
      },
      {
        path: '/my-tutorials',
        element: <MyTutorials></MyTutorials>,
        loader: () => fetch("https://language-exchange-server-plum.vercel.app/tutorials").then((res) => res.json())
      },
      {
        path: '/my-booked-tutors',
        element: <PrivetRoute><MyBookedTutors></MyBookedTutors></PrivetRoute>,
        loader: () => fetch("https://language-exchange-server-plum.vercel.app/booked-tutors").then((res) => res.json()),
      },
      {
        path: '/updateTutorial/:id',
        element: <PrivetRoute><UpdateTutorial></UpdateTutorial></PrivetRoute>,
        loader: ({ params }) => fetch(`https://language-exchange-server-plum.vercel.app/tutorials/${params.id}`).then((res) => res.json()),
      },

    ]
  },
]);



export default router;