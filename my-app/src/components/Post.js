import { format, formatISO9075 } from "date-fns";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {io} from 'socket.io-client'


const socket = io('/',{
  reconnection: true

})

export default function Post({_id, title, summary, cover, content, createdAt, author }) {
  // Tworzymy pełną ścieżkę do obrazu, łącząc ścieżkę frontendu z nazwą pliku obrazu

  useEffect(()=>{
    console.log("SOCKET IO", socket)
  },[])
  return (
    <div className="w-[50%] text-[white] mt-10 my-5 grid-cols-2 gap-20">

    
      

      <div>
        <Link to={`/post/${_id}`}>
            <h2 className="text-[30px]">{title}</h2>
        </Link>


        <p className="mb-5 mt-2 text-[green] ">

        <time className="text-[grey]">
            {format(new Date(createdAt), "d MMM yyyy HH:mm")}
          </time>

          <a href="" className="mx-5">
            {author && author.username}
          </a>
        </p>
        <Link to={`/post/${_id}`}>
        <img src={'http://localhost:4000/'+cover} alt="post_img"/>
    </Link>
  
        <p className="text-[16px]">{summary}</p>
 
        <div className="text-white mt-6" dangerouslySetInnerHTML={{__html:content}} />
      </div>
    </div>
  );
}

