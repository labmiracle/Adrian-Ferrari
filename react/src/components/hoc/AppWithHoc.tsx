import withHoc from "./withHoc";
import Post from "../utilities-functions/posts-component/Post";
import "./css/appWithHoc.scss";
import { useState } from "react";

export default function AppWithHoc() {
  const [userId, setUserId] = useState(1);
  const PostwithHoc = withHoc(Post, userId);

  function nextUser() {
    setUserId((prev) => prev + 1);
  }

  function prevUser() {
    setUserId((prev) => (prev === 1 ? prev : prev - 1));
  }

  return (
    <div className="hoc-container">
      <p>
        Crear un HOC que haga peticiones a una api https://jsonplaceholder.typicode.com/ y usarlo para renderizar el
        listado de posts visualizando el detalle de un post.
      </p>
      <button onClick={prevUser}>Prev User</button>
      <button onClick={nextUser}>Next User</button>
      <div className="posts-list">
        <PostwithHoc userId={0} id={0} title={""} body={""} />
      </div>
    </div>
  );
}
