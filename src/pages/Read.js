import { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import '../styles.css'
export function Read() {
  let { setRead } = useContext(DataContext);

  let { books } = useContext(DataContext);

  let { favBooksFun } = useContext(DataContext);

  let { numberOfReads } = useContext(DataContext);

  let ReadedBooks = books.filter((book) => book.read === true);
  return (
    <div style={{marginTop:"2rem"}}>
     
      {ReadedBooks.map((book) => (
        <ul
         className="mainbox"
          style={{
            listStyle: "none",
             height:"7rem"
           }}
          s
        >
          <img
            alt="Loading..."
            style={{ height: "7rem"  }}
            src={book.image}
          />
          <li>Title : {book.title}</li>
     
          <li>
            <span s id="fav-status" >status:</span>{" "}
            <span  style={{ color: book.read === true ? "green" : "red" }}>
              {" "}
              {book.read === true ? "completed" : "read it"}
            </span>
          </li>

          <button  className="primary-btn"
            onClick={() => favBooksFun(book)}
            // style={{ margin: "1rem", borderRadius: "1rem" }}
          >
            Add to fav
          </button>
        </ul>
      ))}
    </div>
  );
}
