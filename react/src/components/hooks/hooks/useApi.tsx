import { useEffect, useState } from "react";
import { PostType } from "../../utilities-functions/posts-component/postType";

const defaultPost = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
};

export function useApi(): PostType[] {
  const [data, setData] = useState<PostType[] | undefined>(undefined);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const posts = await response.json();
      setData(() => posts);
    })();
  }, []);
  if (data === undefined || !data) return [defaultPost];
  return data;
}
