
import {
  createBrowserRouter,
 
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


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
    ]
  },
]);



export default router;