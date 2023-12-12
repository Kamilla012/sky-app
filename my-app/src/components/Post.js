import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { format } from "date-fns";
=======
import { format, formatISO9075 } from "date-fns";
>>>>>>> e06f1c97c0b5519c1cfc8e3dc5ea82a8919ff8ff
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

<<<<<<< HEAD
const socket = io.connect("http://localhost:4001/", {
=======
const socket = io.connect("http://localhost:4001/",{
>>>>>>> e06f1c97c0b5519c1cfc8e3dc5ea82a8919ff8ff
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
<<<<<<< HEAD
  userId, 
}) {
  useEffect(() => {
    console.log("SOCKET IO", socket);
  }, []);

  const [isHeartRed, setHeartRed] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = () => {
    setHeartRed(!isHeartRed);
    const newLikeCount = isHeartRed ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);

    // Wysyłanie zdarzenia do serwera z userId
    socket.emit('likeUpdateRequest', { postId: _id, userId, isLiked: !isHeartRed });
  };

  useEffect(() => {
    // Odbieranie zdarzenia od serwera socket.io
    socket.on('likeUpdate', (data) => {
      if (data.postId === _id) {
        setLikeCount(data.likeCount);
      }
    });

    // Odczyt zdarzenia po odmontowaniu komponentu
    return () => {
      socket.off('likeUpdate');
    };
  }, [_id]);

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        console.log('Fetching like count for post:', _id, 'with userId:', userId);
    
        const response = await fetch(`http://localhost:4000/posts/${_id}/likes?userId=${userId}`);
        const data = await response.json();
    
        setLikeCount(data.likeCount);
        setHeartRed(data.isLiked);
      } catch (error) {
        console.error('Error fetching like count:', error);
      }
    };
    fetchLikeCount();

    return () => {
      // Czyszczenie zasobów, jeśli to konieczne
    };
  }, [_id, userId]);

=======
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

>>>>>>> e06f1c97c0b5519c1cfc8e3dc5ea82a8919ff8ff
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

<<<<<<< HEAD
      <FontAwesomeIcon
        icon={faHeart}
        className="text-[30px]"
        style={{ color: isHeartRed ? 'red' : 'white' }}
        onClick={handleClick}
      />
      <p className="text-[16px]">Likes: {likeCount}</p>
=======
        <FontAwesomeIcon icon={faHeart}
        className="text-[30px]"
        style={{ color: isHeartRed ? 'red' : 'white' }} 
        onClick={handleClick}
        />
        <p className="text-[16px]">Likes: {likeCount}</p>
        


>>>>>>> e06f1c97c0b5519c1cfc8e3dc5ea82a8919ff8ff
    </div>
  );
}
