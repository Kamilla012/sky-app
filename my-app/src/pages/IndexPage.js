// import { useEffect, useState } from "react";
// import Post from "../components/Post";
// export default function IndexPage(){
//     const [posts, setPosts] = useState([])
//     useEffect(()=>{
//         fetch('http://localhost:4000/post').then(response =>{
//             response.json().then(posts =>{
//                 // console.log(posts)
//                 setPosts(posts)
//             })
//         })
//     }, [])
//     return(
//         <>
//         {posts.length > 0 && posts.map(post => (
//             <Post {...post}/>
//         ))}
//             {/* <Post />
//             <Post />
//             <Post /> */}
//         </>
//     )
// }
import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Sprawdzamy, czy otrzymana odpowiedź jest tablicą
          const sortedPosts = data.sort(/* Dodaj tutaj swój sposób sortowania */);
          setPosts(sortedPosts);
        } else {
          console.error("Otrzymana odpowiedź nie jest tablicą:", data);
        }
      })
      .catch(error => {
        console.error("Błąd podczas pobierania danych:", error);
      });
  }, []);

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </>
  );
}
