import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Main from "../layout/Main";

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    }
])