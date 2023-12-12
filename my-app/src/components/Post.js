import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const socket = io.connect("http://localhost:4001/",{
  reconnection: true
});

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  // Tworzymy pełną ścieżkę do obrazu, łącząc ścieżkę frontendu z nazwą pliku obrazu

  useEffect(() => {
    console.log("SOCKET IO", socket);
  }, []);

  const [isHeartRed, setHeartRed] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Funkcja obsługująca kliknięcie
  const handleClick = () => {
    setHeartRed(!isHeartRed);
    // Zamiast używać prevCount, użyj bezpośrednio aktualnego stanu
   
    socket.emit('likeAdded', { postId: _id, isLiked: !isHeartRed });
  };
  useEffect(() => {
    socket.on('likeUpdate', (data) => {
      if (data.postId === _id) {
        const likeChange = data.isLiked ? 1 : -1;
        setLikeCount((prevCount) => prevCount + likeChange);
      }
    });
  
    return () => {
      // Clean up the socket listener when the component unmounts
      socket.off('likeUpdate');
    };
  }, [_id]);

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
          <img src={"http://localhost:4000/" + cover} alt="post_img" />
        </Link>

        <p className="text-[16px]">{summary}</p>

        <div
          className="text-white mt-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

        <FontAwesomeIcon icon={faHeart}
        className="text-[30px]"
        style={{ color: isHeartRed ? 'red' : 'white' }} 
        onClick={handleClick}
        />
        <p className="text-[16px]">Likes: {likeCount}</p>
        


    </div>
  );
}
