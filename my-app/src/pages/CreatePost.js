import styles from "../style";

export default function CreatePost(){
    return(
        <div className={`${styles.divForm}`}>
            
        <form className={`${styles.form}`}>
        <h3 className={`${styles.h2}`}>Create your post!</h3>
            <input type="title" placeholder={'Title'} className={`${styles.inputForm}`}/>
            <input type="summary" placeholder={'Summary'} className={`${styles.inputForm}`}/>
            <input type="file" className={`${styles.inputForm}`}/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        </div>
    )
}
