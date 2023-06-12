import { useState, useEffect } from "react";
import { PostType } from "../utilities-functions/posts-component/postType";

export default function withHoc(
  Component: React.FunctionComponent<PostType>,
  id: number
): React.FunctionComponent<PostType> {
  function ComponentwithHoc() {
    const [posts, setPost] = useState<PostType[] | undefined>(undefined);
    useEffect(() => {
      async function getPosts() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const posts: PostType[] = await response.json();
        setPost(() => posts);
      }
      getPosts();
    }, []);
    if (posts?.length === 0) return <p>No data</p>;
    if (!posts) return <p>Loading data...</p>;
    const newComp = posts.map((post) => {
      return <Component {...post} key={post.userId + post.id} />;
    });
    return newComp;
  }
  return ComponentwithHoc;
}
