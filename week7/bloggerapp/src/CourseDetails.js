import React from "react";
import { courses } from "./data";

const CourseDetails = () => (
  <div className="mystyle1">
    <h1>Course Details</h1>
    {courses.map((c, index) => (
      <div key={index}>
        <b>{c.name}</b><br />
        {c.date}<br /><br />
      </div>
    ))}
  </div>
);

export default CourseDetails;
