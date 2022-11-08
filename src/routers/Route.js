import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Main from "../layout/Main";
import Service from "../components/Service/Service";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Page404 from "../components/Page404/Page404";
import AddServices from "../components/AddServices/AddServices";
import MyReviews from "../components/MyReviews/MyReviews";

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
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservices',
                element: <AddServices></AddServices>
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/regester',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])