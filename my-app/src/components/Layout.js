import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";






export default function Layout({ children, userInfo, setUserInfo }){
    return(
        <main className="bg-primary h-[150vh]">
             <div>
             <Header userInfo={userInfo} setUserInfo={setUserInfo} />
                {children}
            </div>
            <Navigation />
            <Outlet />
          

        </main>
    )
}