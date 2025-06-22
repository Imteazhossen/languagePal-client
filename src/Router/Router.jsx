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
      },
      {
        path: '/find-tutors/:category',
        Component: FindTutorCategory
      },
      {
        path: '/tutor-details/:id',
        element: <PrivetRoute><TutorDetails></TutorDetails></PrivetRoute>,
        loader: () => fetch("http://localhost:3000/tutors").then((res) => res.json()),
      },
      {
        path: '/add-tutorial',
        element: <PrivetRoute><AddTutorials></AddTutorials></PrivetRoute>
      },
      {
        path: '/my-tutorials',
        element: <PrivetRoute><MyTutorials></MyTutorials></PrivetRoute>,
        loader: () => fetch("http://localhost:3000/tutorials").then((res) => res.json())
      },
      {
        path: '/my-booked-tutors',
        element: <PrivetRoute><MyBookedTutors></MyBookedTutors></PrivetRoute>,
        loader: () => fetch("http://localhost:3000/booked-tutors").then((res) => res.json()),
      },
      {
        path: '/updateTutorial/:id',
        element: <PrivetRoute><UpdateTutorial></UpdateTutorial></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/tutorials/${params.id}`).then((res) => res.json()),
      },

    ]
  },
]);



export default router;