import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export default function PostPage() {
  const [posts, setPost] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get<Post[]>(
        'http://localhost:1337/api/posts',
        {
          headers: {
            Authorization:
              'Bearer 68519ee12791d64d293c63cac18694efb94d3c6a4d92dc9228af8dc104b86cdc0a1d77b6398e835f636505b9355ffeabd5a27809c72c3de95ab5b8392775505afeb47d79de0f3c82693114d90719ad80d21ad483a4c5c94041b2b0afb29e7d517024337380a24ac175c7513643d63797759b415b056c0eadd6d406b812100c38',
          },
        }
      );
      setPost(response.data.data);
    };
    fetchPost();
  }, []);
  return (
    <section>
      <h1>Post</h1>
      {posts.map(post => (
        <p key={post.id}>{post.attributes.Title}</p>
      ))}
    </section>
  );
}
