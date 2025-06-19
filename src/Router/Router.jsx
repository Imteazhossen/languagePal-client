import {createBrowserRouter,} from "react-router";
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


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <div className="flex justify-center my-30">
          <span className="loading loading-spinner flex justify-center loading-xl"></span>
        </div>,
      },
      {
        path:'/register',
        Component: Register
      },
      {
        path:'/login',
        Component: Login
      },
       {
        path:'/find-tutors',
        Component: FindTutor
      },
       {
        path:'/find-tutors/:category',
        Component: FindTutorCategory
      },
       {
        path:'/tutor-details/:id',
        Component: TutorDetails
      },
       {
        path:'/add-tutorial',
        Component: AddTutorials
      },
       {
        path:'/my-tutorials',
        Component: MyTutorials
      },
      {
        path:'/my-booked-tutors',
        Component: MyBookedTutors
      },
    ]
  },
]);



export default router;