import { Link } from "react-router-dom";
import '../styles.css'
import myimage from './mypic.jpg'
export function Profile() {
    return (
      <div className="profilebox"  >
        <img id="my-profile" src={myimage}  />

       <p id="my-description" style={{}}> Hi Iam <>Nikhil Kumar Naroliya</>  a MCA final year student at NIT Agartal ,for  help regarding studies you can contact me through given chhanels .  </p>
       <span style={{color:"white"}}>nikhilnaroliya6953@gmail.com</span>
       
       <br></br>
       <br></br>
       <span ><Link id="linkedinbtn"  style={{cursor:"pointer",textDecoration:"none",color:"white",border:"1px solid white",borderRadius:"0.5rem",padding:"0.2rem"}} to="https://github.com/NikhilNaroliya/Study-Help" >Source Code</Link></span>
       <br></br>
       <br></br>
   
       <Link id="linkedinbtn" style={{color:"white" ,border:"1px solid white", borderRadius:"0.5rem",padding:"0.5rem",textDecoration:"none"}} to="https://www.linkedin.com/in/nikhil-naroliya-a3b2a8238">LinkedIn</Link>

       </div>
    );
  }
  