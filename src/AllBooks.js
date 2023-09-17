import "./styles.css";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { DataContext } from "./DataContext";
export function AllBooks() {
  let { setRead } = useContext(DataContext);
  let { books } = useContext(DataContext);
  let { favBooksFun } = useContext(DataContext);
  let { fav } = useContext(DataContext);
  let { seachBooks } = useContext(DataContext);
  let { searchedBooks } = useContext(DataContext);
  return (
    // rendering for only searched boxes
  
    <div >
      <input id="SearchBoxinput"
        onChange={seachBooks}
        type="text"
      
        placeholder="SearchTitle"
      />{" "}
      
      
      <div className="mainContainer searchedbook ">
        {searchedBooks.map((book) => (
          <ul>
            <img id="search-box-img" alt="Loading..." src={book.image} />
            <li className="title">Title : {book.title}</li>
            <li className="author">Author : {book.author}</li>
            <li className="studynow-btn">
            
              <Link to={book.ReadMe}>
                <span id="studynow">StudyNow</span>
              </Link>
            </li>
           
          </ul>
        ))}
      </div>
      {/* rednering all boxes here  */}
      <div className="allbooks">
        {
        books.map((book) => (
          <ul style={{listStyle:"none"}} className="mainbox">
            <div id="mainbox-img" >
            <img alt="Loading..." src={book.image} />
            </div>
            

            <li className="title"> Title : {book.title}</li>
            {/* <li className="author">Author : {book.author}</li> */}
            <li className="studynow-btn">
              
              <span className="status">Status:</span>{" "}
              <span style={{ color: book.read === true ? "green" : "red" }}>
              
                {book.read === true ? "Completed" : "Read it"}
              </span>
            </li>

            {/* <li>Publisher : {book.publisher}</li> */}
            {/* <li> {book.year}</li> */}

            <button
              className="primary-btn"
              onClick={() => setRead(book)}
              disabled={book.read === true ? "disabled" : ""}
            >
              {book.read === true ? "Already Read" : "Mark Read"}
            </button>
            <button className="primary-btn" onClick={() => favBooksFun(book)}>
              {fav.includes(book) ? (
                <NavLink style={{color:"white",textDecoration:"none"}} to="/fav">Go to Fav</NavLink>
              ) : (
                "Add To Fav"
              )}
            </button>
            <li className="studynow-btn">
              {" "}
              <Link to={book.ReadMe}>
                <span id="studynow">StudyNow</span>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
