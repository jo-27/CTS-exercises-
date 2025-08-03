import React from "react";
import { books } from "./data.js";

const BookDetails = () => (
  <div className="st2">
    <h1>Book Details</h1>
    {books.map((book) => (
      <div key={book.id}>
        <b>{book.bname}</b><br />
        {book.price}<br /><br />
      </div>
    ))}
  </div>
);

export default BookDetails;
