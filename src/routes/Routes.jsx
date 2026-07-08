import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddVisa from "../pages/AddVisa";
import VisaDetails from "../pages/VisaDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true, // এটি দিলে '/' পাথে সরাসরি হোম পেজ লোড হবে
                element: <Home />,
            },
            {
                path: "visas", // এখানে শুরুতে আলাদা করে '/' দেওয়ার দরকার নেই
                element: <PrivateRoutes><AllVisas /></PrivateRoutes>,
            },
            {
                path:"add-visa",
                element:<PrivateRoutes><AddVisa></AddVisa></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path:"/register",
                element:<Register></Register>,
            },
            {
                path:"visas/:id",
                element:<PrivateRoutes><VisaDetails></VisaDetails></PrivateRoutes>
            }
        ],
    },
]);

export default router;