import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, formatISO9075 } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import FooterIndex from "../components/FooterIndex";
export default function PostPage() {
    const [postInfo,setPostInfo] = useState(null);
    // const {userInfo} = useContext(UserContext);
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
          <div className="flex flex-col w-[90%] texth-screen-center">
            <h1 className="text-[40px] text-white mb-2">{postInfo.title}</h1>

            <div className="flex justify-center mb-5">
            <time className="text-[grey]">
            {format(new Date((postInfo.createdAt)), "d MMM yyyy HH:mm")}
          </time>
          <p className="ml-1 text-[green]">  
          {/* by {postInfo.author.username} */}
          </p>
            </div>
            

            {/* {userInfo.id === postInfo.author._id && (
                
                <div>
                    <a className="text-white" href="">Edit this post</a>
                </div>
            )} */}
            <img src={`http://localhost:4000/${postInfo.cover}`} alt="post_img" />
            
            <h2 className="text-white text-[24px] my-4 ">{postInfo.title}</h2>
            <p className="text-white" dangerouslySetInnerHTML={{__html: postInfo.content}} />
            
          </div>
          <FooterIndex />
        </div>
        
      );
      
}
