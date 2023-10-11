import styles from "../style"

export default function LoginPage(){
    return(
        
        <div className={`${styles.divForm}`}>

        <form className={`${styles.form}`}>
            <h2 className={`${styles.h2}`}>Login</h2>
            <input type="text" placeholder="username" className={`${styles.inputForm}`} />
            <input type="password" placeholder="password" className={`${styles.inputForm}`} />
            <button className={styles.buttonForm}>Login</button>
        </form>
    </div>
        
    )
}