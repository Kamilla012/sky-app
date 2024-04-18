import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styles from "../style";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import FooterIndex from "../components/FooterIndex";
const modules = {
    toolbar:[
        [{'header': [1, 2, false]}]
    ]
}

const formats = [
    'header',
    'bold', 'italic', 'underline'
]

export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState(''); 
    const [redirect, setRedirect] = useState(false)
    async function createNewPost(ev){
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        ev.preventDefault();
        // console.log(files)
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        });
        // console.log(await)
        if(response.ok){
            setRedirect(true);
        }
    }
    if(redirect === true){
        return <Navigate to={'/'} />
    }
    return(
        <div>
        <div className={`${styles.divForm} border-none`}>
            
        <form className={`${styles.form} w-[800px] border-2 border-green rounded-lg m-10`} onSubmit={createNewPost}>
            <p className="text-[25px] font-bold text-green-500 mt-1 text-white text-center">Function still in development</p>
        <h2 className={`${styles.h2}`}>Create your post! - still in development!</h2>
            <input type="title"
                placeholder={'Title'}
                className={`${styles.inputForm}`}
                value={title} onChange={ev => setTitle(ev.target.value)}
                />

            <input type="summary" 
                placeholder={'Summary'}
                className={`${styles.inputForm}`}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
                />

            <input type="file"
            // value={files}
            onChange={ev=> setFiles(ev.target.files)}
            className={`${styles.inputForm} text-white`}
            />

            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
            <ReactQuill 
            className="text-white border-green-500 max-w-[500]"
            value={content}
            onChange={value => setContent(value)}
            formats={formats}
            />
            <button className={`${styles.buttonForm} mt-8`}>Create post</button>
        </form>
       
        
        </div>
         <div>
         <FooterIndex />
         </div>
         </div>
    )
}
