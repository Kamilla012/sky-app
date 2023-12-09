import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  // const {userInfo} = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostInfo = async () => {
      const postResponse = await fetch(`http://localhost:4000/post/${id}`);
      const postInfo = await postResponse.json();
      setPostInfo(postInfo);
  
      // Dodatkowe zapytanie do pobrania liczby polubień
      const likesResponse = await fetch(`http://localhost:4000/post/${id}/likes`);
      const likesData = await likesResponse.json();
      setLikes(likesData.likes);
    };
  
    fetchPostInfo();
  }, [id]);

  const handleLike = async () => {
    const response = await fetch(`http://localhost:4000/post/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ userId: userInfo.id }),
    });

    const data = await response.json();
    setLikes(data.likes);
    setIsLiked(true);
  };

  const handleUnlike = async () => {
    const response = await fetch(`http://localhost:4000/post/${id}/unlike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ userId: userInfo.id }),
    });

    const data = await response.json();
    setLikes(data.likes);
    setIsLiked(false);
  };

  if (!postInfo) return '';

  return (
    <div className="flex justify-center mt-6">
      <div className="flex flex-col w-[90%] texth-screen-center">
        <h1 className="text-[40px] text-white mb-2">{postInfo.title}</h1>

        <div className="flex justify-center mb-5">
          <time className="text-[grey]">
            {format(new Date(postInfo.createdAt), "d MMM yyyy HH:mm")}
          </time>
          <p className="ml-1 text-[green]">
            {/* by {postInfo.author.username} */}
          </p>
        </div>

        <img src={`http://localhost:4000/${postInfo.cover}`} alt="post_img" />

        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={isLiked ? handleUnlike : handleLike}
            className={isLiked ? "text-red-500 cursor-pointer" : "cursor-pointer"}
          />
          <span className="ml-1">{likes}</span>
        </div>

        <h2 className="text-white text-[24px] my-4 ">{postInfo.title}</h2>
        <p className="text-white" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </div>
  );
}
