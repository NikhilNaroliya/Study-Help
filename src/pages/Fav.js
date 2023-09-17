import { useContext } from "react";
import { DataContext } from "../DataContext";
import '../styles.css'
export function Fav() {
  const { fav } = useContext(DataContext);
  const { favLength } = useContext(DataContext);
  const { setRead } = useContext(DataContext);
  return (
    <div>
      <h1></h1>
      {fav.map((book) => (
        <ul  className="mainbox "
          style={{
            listStyle: "none",
            height:"7rem"
            
          }}
        >
          <img
           id="fav-img"
            alt="Loading..."
            style={{height:"7rem"}}
            src={book.image}
          />
          <li id="fav-li">Title : {book.title}</li>
        
          <li>
            <span id="fav-status" >status:</span>{" "}
            <span style={{ color: book.read === true ? "green" : "red" }}>
              {" "}
              {book.read === true ? "completed" : "read it"}
            </span>
          </li>
          <button  className="primary-btn"
            onClick={() => setRead(book)}
            
            disabled={book.read === true ? "disabled" : ""}
          >
            mark as read
          </button>
        </ul>
      ))}
    </div>
  );
}
