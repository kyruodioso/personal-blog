import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Route =()=>{
    return(
        <>
        <Navbar />
        <main className="mt-4">
         <Outlet/>
         </main>
        <Footer/>
        </>
    )
}

export default Route