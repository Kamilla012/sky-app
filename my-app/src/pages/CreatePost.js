import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styles from "../style";
import { useState } from "react";

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
        });
        // console.log(await)
    }

    return(
        <div className={`${styles.divForm}`}>
            
        <form className={`${styles.form}`} onSubmit={createNewPost}>
        <h2 className={`${styles.h2}`}>Create your post!</h2>
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
            className="text-white border-green-500"
            value={content}
            onChange={value => setContent(value)}
            formats={formats}
            />
            <button className={`${styles.buttonForm} mt-8`}>Create post</button>
        </form>
        </div>
    )
}
