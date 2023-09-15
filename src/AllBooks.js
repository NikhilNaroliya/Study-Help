import "./styles.css";
import { useContext } from "react";
import { NavLink ,Link} from "react-router-dom";
import { DataContext } from "./DataContext";
export function AllBooks() {
  let { setRead } = useContext(DataContext);
  let { books } = useContext(DataContext);
  let { favBooksFun } = useContext(DataContext);
  let { fav } = useContext(DataContext);
  let { seachBooks } = useContext(DataContext);
  let { searchedBooks } = useContext(DataContext);
  return (
    <div>
      <input
        onChange={seachBooks}
        type="text"
        style={{
          color:"white",
          width:"20%",
          margin: "2rem",
          borderRadius: "0.4rem",
          background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 58%, rgba(89,0,255,1) 100%)",
          paddingLeft:"7rem"
          // borderColor: "white"
        }}
      placeholder="Search By Name"
      />{" "}
      <div  className="mainContainer searchedbook ">
        {
          searchedBooks.map((book) => (
          <ul
            style={{
              display: "flex",
 
              flexDirection: "column",
              listStyle: "none",
              border: "1px solid grey",
              borderRadius: "4px",
              margin: "auto",
              width: "30%",
              color:"white",
              
              marginBottom: "1rem",
              height: "18rem"

            }}
          >
            <img
              alt="Loading..."
              style={{
                position:"absolute",
                borderRadius: "0.5rem",
                height: "18rem",
                width: "13rem",
                padding: "2rem",
                marginLeft: "-4.4rem",
                marginTop:"-2rem"
              }}
              src={book.image}
            />
            <li style={{marginTop:"3rem",marginLeft:"6rem",marginBottom:"0.3rem"}}>Title : {book.title}</li>
            <li style={{marginTop:"1rem",marginLeft:"6rem",marginBottom:"2rem"}}>Author : {book.author}</li>
            <li style={{marginBottom:"1rem",marginLeft:"6rem"}}> <Link to={book.ReadMe} ><span  id="studynow"style={{ marginTop:"2rem",color:"white", border:"1px solid white",borderRadius:"5px ",padding:"0.2rem"}}>StudyNow</span></Link></li> 
            {/* <li>publisher : {book.publisher}</li> */}
          </ul>
        ))}
       
      </div>
      <div
        className="allbooks"
        style={{ display: "flex", margin: "0.3rem", flexWrap: "wrap" }}
      >
          {books.map((book) => (
          <ul
            className="mainbox"
            style={{
                color:"white",

              display: "flex",
          
              boxShadow:"revert-layer",
 
              flexDirection: "column",
              listStyle: "none",
              // border: "1px solid white",
              borderRadius: "0.5rem",
              margin: "auto",
              width: "30%",
              color:"white",
              
              marginBottom: "1rem",
              height: "18rem"
            }}
            >
            
            <img id="mainbox-img"
            
              alt="Loading..."
              style={{
                border:"0.3rem",
                position:"absolute",
                borderRadius: "2rem",
                height: "18rem",
                width: "13rem",
                padding: "2rem",
                marginLeft: "-4.4rem",
                marginTop:"-2rem"
              }}
              src={book.image}
            />
          
            
            <li style={{marginTop:"3rem",marginLeft:"6rem",marginBottom:"0.3rem"}}>Title : {book.title}</li>
            <li style={{marginBottom:"0.3rem",marginTop:"0.3rem",marginLeft:"6rem"}}>Author : {book.author}</li>
           <li> <span style={{marginTop:"1rem",marginLeft:"6rem"}}>Status:</span>{" "}
              <span style={{ color: book.read === true ? "green" : "red" }}>
                {" "}
                {book.read === true ? "Completed" : "Read it"}
              </span></li> 
           
            {/* <li>Publisher : {book.publisher}</li> */}
            {/* <li> {book.year}</li> */}
        
      
         
            <button id="primary-btn"
              onClick={() => setRead(book)}
              style={{
                border: "2px solid",
                borderColor: "lightblue",
                borderRadius: "0.5rem",
                margin: "auto",
                width: "6rem",
                color:"white",
                marginBottom: "0.3rem",
                marginTop: "0.3rem",
                marginBottom:"-0.5rem",
                marginLeft:"14rem",
                background:" linear-gradient(109.6deg, rgb(43, 1, 91) 13.4%, rgb(122, 2, 54) 100.2%)",
                cursor:"pointer",
                marginTop:"1rem"

              }}
              disabled={book.read === true ? "disabled" : ""}
            >
              {book.read === true ? "Already Read" : "Mark Read"}
            </button>
            <button id="primary-btn"
              onClick={() => favBooksFun(book)}
              style={{
                // border: "2px solid",
                marginBottom:"6.7rem",
                borderColor: " white",
                margin: "auto",
                borderRadius: "0.5rem",
                color:"white",
                width: "6rem",
                marginLeft:"14rem",
                background:" linear-gradient(109.6deg, rgb(43, 1, 91) 13.4%, rgb(122, 2, 54) 100.2%)",
                cursor:"pointer",
                marginTop:"1rem"
                
                
              }}
              
            >
              {fav.includes(book) ? (
                <NavLink
                  style={{ 
                
                    color: "black", textDecoration: "none" }}
                  to="/fav"
                >
                  go to fav
                </NavLink>
              ) : (
                "Add To Fav"
              )}
            </button>
            <li style={{marginBottom:"4rem",marginLeft:"6rem"}}> <Link to={book.ReadMe} ><span  id="studynow"style={{ textDecoration:"none",color:"white", border:"1px solid white",borderRadius:"5px ",padding:"0.2rem"}}>StudyNow</span></Link></li> 
          </ul>
        ))}
      </div>
    </div>
  );
}
