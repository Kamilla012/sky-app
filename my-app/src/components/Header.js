import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
export default function Header() {
  const [username, setUsername] = useState(null)
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


//   fetch('https://example.com/some/path/to/json')
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     // Do something with data
// });
    // const {setUserInfo,userInfo} = useContext(UserContext);
    // useEffect(() => {
    //   fetch('http://localhost:4000/profile', {
    //     credentials: 'include',
    //   }).then(response => {
    //     return response.json();
    //     // response.json().then(userInfo => {
    //     //   setUserInfo(userInfo);
    //     // });
    //   });
    // }, []);
  
    // function logout() {
    //   fetch('http://localhost:4000/logout', {
    //     credentials: 'include',
    //     method: 'POST',
    //   });
    //   setUserInfo(null);
    // }
  
    // const username = userInfo?.username;
    return(
        <header className="flex text-[grey] text-[20px] justify-end">
        <nav>
          {username &&(
            <>
               <Link to="/create" className="mr-10">Create new post</Link>
              <a onClick={logout} >Logout ({username})</a>
              <Link to="./blog">Blog</Link> 
            </>
          )}
          {!username &&(
            <>
                <Link to="./login" >Login</Link>
                <Link to="./register" className="mx-10">Register</Link>
                {/* <Link to="./blog"></Link> */}
            </>
          )}

          
    
        
        </nav>
                
    </header>
    )
}