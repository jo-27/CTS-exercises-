import React from "react";
import { blogs } from "./data";

const BlogDetails = () => (
  <div className="v1">
    <h1>Blog Details</h1>
    {blogs.map((b, index) => (
      <div key={index}>
        <b>{b.title}</b><br />
        <i>{b.author}</i><br />
        {b.content}<br /><br />
      </div>
    ))}
  </div>
);

export default BlogDetails;
