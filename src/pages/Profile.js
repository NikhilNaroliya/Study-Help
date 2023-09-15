import { Link } from "react-router-dom";
import '../styles.css'
import myimage from './mypic.jpeg'
export function Profile() {
    return (
      <div className="profilebox"  >
        
      <img src={myimage} style={{height:"10rem",width:"10rem",borderRadius:"50%",marginTop:"2rem",}} />
       <p style={{color:"white",fontFamily:"Dancing Script"}}> Hi Iam <span style={{backgroundColor:""}}>Nikhil Kumar Naroliya</span>  a MCA final year student at NIT Agartal ,for  help regarding studies you can contact me through given chhanels .  </p>
       <span style={{color:"white"}}>nikhilnaroliya6953@gmail.com</span>
       <br></br>
       <br></br>
   
       <Link id="linkedinbtn" style={{color:"white" ,border:"1px solid white", borderRadius:"0.5rem",padding:"0.5rem",textDecoration:"none"}} to="https://www.linkedin.com/in/nikhil-naroliya-a3b2a8238">LinkedIn</Link>
 
      </div>
    );
  }
  