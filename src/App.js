import "./styles.css";
import { AllBooks } from "./AllBooks";
import { NavLink,Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Read } from "./pages/Read";
import { Profile } from "./pages/Profile";
import { Fav } from "./pages/Fav";
import { useContext } from "react";
import {Notes} from "./pages/Notes"
import {Chat} from "./pages/Chat"
import { DataContext } from "./DataContext";

export default function App() {
  let { favLength } = useContext(DataContext);
  let { numberOfReads } = useContext(DataContext);
  return (
    <div className="App">
      

      <nav
       className="Navbar"
        style={{
          
          // border: "1px solid",
          borderColor: "lightblue",
          borderRadius: "0.6rem",
          backgroundColor: "white",
          height: "1rem",
          padding: "1rem",
          margin: "1rem",
          marginTop:"-1rem",
          marginBottom:"2rem",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <NavLink className="Navbarlink" style={{ color: "white", textDecoration: "none" }} to="/">
          {" "}
          Home{" "}
        </NavLink>


        <NavLink className="Navbarlink" style={{ color: "white", textDecoration: "none" }} to="/fav">
          {" "}
          Fav({favLength})
        </NavLink>
        <NavLink className="Navbarlink" style={{ color: "white", textDecoration: "none" }} to="/read">
          {" "}
          Read({numberOfReads})
        </NavLink>
        <NavLink className="Navbarlink" style={{ color: "white", textDecoration: "none" }} to="/notes">
          {" "}
          AddNotes{" "}
        </NavLink>
        <NavLink className="Navbarlink" style={{ color: "white", textDecoration: "none" }} to="/chat">
          {" "}
          Chat{" "}
        </NavLink>
        <NavLink className="Navbarlink"
          style={{ textDecoration: "none", color: "white" }}
          to="/profile"
        >
          Profile
        </NavLink>
      </nav>
      <Link
      id="AllSubjects"
        style={{
          color: "white",
          marginTop: "rem",
          padding: "1rem",
          
        
        
          // border: "1px solid white",
          borderRadius: "0.7rem",
          borderColor: "lightblue",
          textDecoration: "none"
        }}
        to="/allbooks"
      >
        View all Subjects
      </Link>
      <Routes>
        <Route path="/" />
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/chat" element={<Chat/>}/>
      
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/read" element={<Read />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
