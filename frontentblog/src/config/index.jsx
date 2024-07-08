import {createBrowserRouter} from "react-router-dom"
import Route from "../layout/Route"

import Home from "../pages/Home"
import SinglePost from "../pages/SinglePost"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Notfound from "../pages/Notfound"
import Services from "../pages/Services"
import { useProjects } from "../services/useProjects"

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Route />,
        errorElement:<Notfound/>,
        children:[
            {   index:true,
                element:<Home/>,
                loader: useProjects
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/post/:id',
                element:<SinglePost/>
            },
            {
                path:'/services',
                element:<Services/>
            }

        ]

    }
])