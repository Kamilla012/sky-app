import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import StarsChart from "./StarsChart";





export default function Layout(){
    return(
        <main className="bg-primary h-screen">
            <Header />
            <Navigation />
            <Outlet />
          
            

       
           
        </main>
    )
}