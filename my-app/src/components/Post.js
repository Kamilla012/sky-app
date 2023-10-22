// import { format, formatISO9075 } from "date-fns";

// export default function Post({title, summary, cover, content, createdAt, author}){
//     return(
//         <div className="text-[white] mt-10 my-5 lg:grid grid-cols-2 gap-20">
//         <img className="w-full" alt="img" />


//         <div>
//         <h2 className="text-[30px]">{title}</h2>
        
//         <p className="mb-5 mt-2 text-[green] ">
//             <a href="" className="mr-5">{author.username}</a> 
//             <time className="text-[grey]">{format(new Date(createdAt), 'd MMM yyyy HH:mm')}</time>
//         </p>

//         <p className="text-[16px]">{summary}</p>
//         <p>{content}</p>
//     </div>
//     </div>
//     )
// }
import { format, formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({_id, title, summary, cover, content, createdAt, author }) {
  // Tworzymy pełną ścieżkę do obrazu, łącząc ścieżkę frontendu z nazwą pliku obrazu


  return (
    <div className="text-[white] mt-10 my-5 lg:grid grid-cols-2 gap-20">
     <Link to={`/post/${_id}`}>
        <img src={'http://localhost:4000/'+cover} alt="post_img"/>
    </Link>
    
      

      <div>
        <Link to={`/post/${_id}`}>
            <h2 className="text-[30px]">{title}</h2>
        </Link>


        <p className="mb-5 mt-2 text-[green] ">
          <a href="" className="mr-5">
            {author.username}
          </a>
          <time className="text-[grey]">
            {format(new Date(createdAt), "d MMM yyyy HH:mm")}
          </time>
        </p>

        <p className="text-[16px]">{summary}</p>
        {content}
      </div>
    </div>
  );
}

