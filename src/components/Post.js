import React from "react";

import Button from "../components/shared/Button";

const Post = ({_id, text, timestamp, onDelete}) => (
  <div className="post">
    <p>{ text }</p>

    <p className="timestamp">{ timestamp }</p>

    <Button text="Edit" />
    <Button type="" text="Delete" onClick={() => onDelete(_id) } />
  </div>
);

export default Post;