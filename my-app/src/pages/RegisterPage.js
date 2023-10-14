import styles from "../style"
import { useState } from "react";

export default function RegisterPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          body: JSON.stringify({username,password}),
          headers: {'Content-Type':'application/json'},
        });
    }
    return(
        <div className={`${styles.divForm}`}>

            <form onSubmit={register} className={`${styles.form}`} >
                <h2 className={`${styles.h2}`}>Register</h2>

                <input type="text"
                    placeholder="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                    className={`${styles.inputForm}`} />

                <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    className={`${styles.inputForm}`} />

                <button className={styles.buttonForm}>Register</button>
            </form>
        </div>
    )
}
