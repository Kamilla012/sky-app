import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
export default function Header() {
  const [username, setUsername] = useState(null)
  const [name, setName] = useState(null)
  useEffect(() =>{
    fetch('http://localhost:4000/profile', {
    method: 'GET',
    credentials: 'include'
  }).then(response =>{
    response.json().then(userInfo =>{
      setUsername(userInfo.username)
    })
  })
  }, []);
  function logout(){
    fetch('http://localhost:4000/logout', {
    method: 'POST',
    credentials: 'include'
    })
    setUsername(null)
  }


    return(
        <header className="flex text-[grey] text-[20px] px-10 pt-5 justify-end">
        <nav>
          {username &&(
            <>
               {/* <Link to="/create" className="mr-10">Create new post</Link> */}
              <a onClick={logout} >Logout ({username})</a>
             
            </>
          )}
          {!username &&(
            <>
                <Link to="./login" >Login</Link>
                <Link to="./register" className="mx-5">Register</Link>
                {/* <Link to="./blog"></Link> */}
            </>
          )}

          
    
        
        </nav>
                
    </header>
    )
}