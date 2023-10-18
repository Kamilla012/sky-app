import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styles from "../style";

export default function CreatePost(){
    return(
        <div className={`${styles.divForm}`}>
            
        <form className={`${styles.form}`}>
        <h2 className={`${styles.h2}`}>Create your post!</h2>
            <input type="title" placeholder={'Title'} className={`${styles.inputForm}`}/>
            <input type="summary" placeholder={'Summary'} className={`${styles.inputForm}`}/>
            <input type="file" className={`${styles.inputForm} text-white`}/>
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
            <ReactQuill className="  text-white border-green-500"/>
            <button className={`${styles.buttonForm} mt-8`}>Create post</button>
        </form>
        </div>
    )
}
