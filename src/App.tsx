import api from "./services/axios";
import { useState, useEffect } from "react";

interface PostsInterface {
  id: number
  title: string,
  body: string,
}

function App() {
  const [posts, setPosts] = useState<PostsInterface[]>([]);

  const handlePosts = async () => {
    try {
      const response = await api.get(`/posts`);
      console.log(response.data)
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>{post.id}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
