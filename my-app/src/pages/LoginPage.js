import {useContext, useState} from "react";
import styles from "../style"
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    // const {setUserInfo} = useContext(UserContext);
    async function login(ev) {
      ev.preventDefault();
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });
  
    if (response.ok) {
      setRedirect(true)
    }else{
      alert('wrong credentials');
    }
  }
    //     response.json().then(userInfo => {
    //       setUserInfo(userInfo);
    //       setRedirect(true);
    //     });
    //   } else {
    //     alert('wrong credentials');
    //   }
    // }
  
    if (redirect === true) {
      return <Navigate to={'/'} />
    
    }
    return(
      
        <div className={`${styles.divForm}`}>

        <form className={`${styles.form}`} onSubmit={login}>
            <h2 className={`${styles.h2}`}>Login</h2>
            <input 
                type="text"
                placeholder="username"
                className={`${styles.inputForm}`}
                value={username}
                onChange={ev => setUsername(ev.target.value)}
                />

            <input
                type="password"
                placeholder="password" 
                className={`${styles.inputForm}`}  
                value={password} 
                onChange={ev => setPassword(ev.target.value)}
                />
            <button className={styles.buttonForm}>Login</button>
        </form>
    </div>
        
    )
}