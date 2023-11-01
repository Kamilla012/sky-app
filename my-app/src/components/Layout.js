import { Outlet } from "react-router-dom";
import Header from "./Header";
import StarsChart from "./StarsChart";
import SearchEngine from '../pages/SearchEngine'
import Satellites from "../components/Satellites";

export default function Layout(){
    return(
        <main className="bg-primary px-8 py-6">
            <Header />
            <Outlet />
            {/* <SearchEngine /> */}
            <Satellites />
            


            {/* <StarsChart /> */}
        </main>
    )
}