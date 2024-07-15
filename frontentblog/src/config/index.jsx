import {createBrowserRouter} from "react-router-dom"
import Route from "../layout/Route"

import Home from "../pages/Home"
import SinglePost from "../pages/SinglePost"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Notfound from "../pages/Notfound"
import Services from "../pages/Services"
import { useProjects } from "../services/useProjects"
import { useAboutMe } from "../services/useAboutMe"
import Blog from "../pages/Blog"
import Posts from "../pages/Posts"
import { useCategory } from "../services/useCategory"
import { useBlog } from "../services/useBlog"


export const router= createBrowserRouter([
    {
        path:'/',
        element:<Route />,
        errorElement:<Notfound/>,
        children:[
            {   index:true,
                element:<Home/>,
                loader: useProjects,
            },
            {
                path:'/about',
                element:<About/>,
                loader: useAboutMe
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/blog',
                element:<Blog />,
                loader: useCategory
            },
            {
                path:'/blog/:id',
                element:<Posts/>,
                loader:useBlog,

            },
            {
                path:'/post/:id',
                element:<SinglePost/>,
                loader:useBlog
            },
            {
                path:'/services',
                element:<Services/>
            }

        ]

    }
])