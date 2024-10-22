import { useEffect } from "react";
import { useState } from "react";
import Comment from "./Comment";
import './style.css'
export default function Comments() {
  const [comment, commentState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => commentState(data))
  }, []);
  
  return(
    <div className="grid-container">
        {
            comment.map(comment => <Comment comment = {comment}></Comment>)
        }
    </div>
  );
}
