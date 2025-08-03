import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css"; 

const App = () => {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {showCourses && <CourseDetails />}
      {showBooks ? <BookDetails /> : <p>No books to show</p>}
      {showBlogs && <BlogDetails />}
    </div>
  );
};

export default App;
