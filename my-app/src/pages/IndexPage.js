import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function IndexPage({ showAllPosts }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          
          let sortedPosts;
          if (showAllPosts === true) {
            sortedPosts = data.slice(0, 100);
          } else {
            sortedPosts = data.slice(0, 3);
          }

          setPosts(sortedPosts);
        } else {
          console.error("Not array:", data);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, [showAllPosts]);

  return (
    <div className="bg-primary">
      {posts.length > 0 && posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
    
  );
}



// import { useEffect, useState } from "react";
// import Post from "../components/Post";

// export default function IndexPage({ showAllPosts }) {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/post')
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data)) {
//           // Sprawdzamy, czy otrzymana odpowiedź jest tablicą
//           let sortedPosts;

//           if (showAllPosts) {
//             // Sortujemy wszystkie wpisy, jeśli showAllPosts jest true
//             sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
//           } else {
//             // Wybieramy tylko trzy ostatnie wpisy, jeśli showAllPosts jest false
//             sortedPosts = data.slice(0, 3);
//           }

//           setPosts(sortedPosts);
//         } else {
//           console.error("Otrzymana odpowiedź nie jest tablicą:", data);
//         }
//       })
//       .catch(error => {
//         console.error("Błąd podczas pobierania danych:", error);
//       });
//   }, [showAllPosts]);

//   return (
//     <>
//       {posts.length > 0 && posts.map(post => (
//         <Post {...post} key={post.id} />
//       ))}
//     </>
//   );
// }

