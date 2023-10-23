import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, formatISO9075 } from "date-fns";
export default function PostPage() {
    const [postInfo,setPostInfo] = useState(null);
    // const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
      fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
          response.json().then(postInfo => {
            setPostInfo(postInfo);
          });
        });
    }, []);
    if(!postInfo) return '';
    return (
        <div className="flex justify-center mt-6">
          <div className="flex flex-col w-[70%] text-center">
            <h1 className="text-[40px] text-white mb-2">{postInfo.title}</h1>
            <time className="text-[grey]">
            {format(new Date((postInfo.createdAt)), "d MMM yyyy HH:mm")}
          </time>
          <p className="mb-5 mt-2 text-[green]">by {postInfo.author.username}</p>

            
            <img src={`http://localhost:4000/${postInfo.cover}`} alt="post_img" />
            <h2 className="text-white text-[24px] my-4">{postInfo.title}</h2>
            <p className="text-white mt-4" dangerouslySetInnerHTML={{__html: postInfo.content}} />
          </div>
        </div>
      );
      
}
