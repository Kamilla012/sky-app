import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    return(
        <main className="bg-primary px-8 py-6">
            <Header />
            <Outlet />
        </main>
    )
}