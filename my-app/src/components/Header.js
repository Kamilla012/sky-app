import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="flex text-[grey] text-[20px] justify-end">

                
        <Link to="./login" className="mr-10">Login</Link>
        <Link to="./register">Register</Link>
    </header>
    )
}