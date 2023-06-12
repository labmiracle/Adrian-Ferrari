import { PostType } from "./postType";
import "./post.scss";

export default function Post(props: PostType) {
  return (
    <div className="post-container">
      <div className="post">
        {props.title && (
          <>
            <sub>Title</sub>
            <h1>{props.title}</h1>
          </>
        )}
        {props.body && (
          <>
            <sub>Body</sub>
            <p>{props.body}</p>
          </>
        )}
        {props.completed !== undefined && (
          <>
            <p>Completed:&nbsp;{`${props.completed}`}</p>
          </>
        )}
      </div>
      <div className="post-info">
        <h2>Post info</h2>
        <p>
          <span>User ID:</span> {props.userId}
        </p>
        <p>
          <span>Post ID:</span> {props.id}
        </p>
      </div>
    </div>
  );
}
