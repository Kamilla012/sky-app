import { Outlet } from "react-router-dom";
import Header from "./Header";
import StarsChart from "./StarsChart";

export default function Layout(){
    return(
        <main className="bg-primary px-8 py-6">
            <Header />
            <Outlet />


            {/* <StarsChart /> */}
        </main>
    )
}