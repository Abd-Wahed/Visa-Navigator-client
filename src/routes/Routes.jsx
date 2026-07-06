import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                element: <AllVisas />,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path:"register",
                element:<Register></Register>,
            }
        ],
    },
]);

export default router;