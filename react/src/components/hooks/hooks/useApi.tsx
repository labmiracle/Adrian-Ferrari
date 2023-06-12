import { useEffect, useState } from "react";
import { PostType } from "../../utilities-functions/posts-component/postType";

export function useApi(): PostType[] {
  const [data, setData] = useState<PostType[]>([] as PostType[]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const posts = await response.json();
      setData(() => posts);
    })();
  }, []);
  if (!data) return [];
  return data;
}
