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
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Blog from "../components/Blog/Blog";
import Update from "../components/MyReviews/Update";



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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
            },
            {
                path: '/addservices',
                element: <PrivetRoute><AddServices></AddServices></PrivetRoute>
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://server-side-orpin.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/regester',
                element: <Signup></Signup>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://server-side-orpin.vercel.app/update/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])

