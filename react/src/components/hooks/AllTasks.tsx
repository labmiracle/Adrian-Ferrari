import { useApi } from "./hooks/useApi";
import Post from "../utilities-functions/posts-component/Post";

export default function AllTasks() {
  const data = useApi();
  const tasks = data.map((task) => {
    return <Post {...task} key={task.userId + task.id} />;
  });

  return <>{tasks}</>;
}
