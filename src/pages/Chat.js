import React  from "react";
import ChatBot from 'react-simple-chatbot'
import { Segment } from "semantic-ui-react";
import '../styles.css'
export function Chat()
 {
    const steps = [
        {
          id: "Greet",        
          message: "Hello Dear, Welcome ",        
          trigger: "Done",        
        },        
        {       
          id: "Done",        
          message: "Please enter your name!",        
          trigger: "waiting1",        
        },      
        {      
          id: "waiting1",      
          user: true,      
          trigger: "Name",      
        },      
        {       
          id: "Name",     
          message: "Hi {previousValue}, Please select your issue",     
          trigger: "issues",     
        },      
        {      
          id: "issues",   
          options: [   
            {    
              value: "React",   
              label: "React",        
              trigger: "React",       
            },       
            { value: "Angular", label: "Angular", trigger: "Angular" },       
          ],       
        },       
        {       
          id: "React",       
          message:        
            "Thanks for letting your React issue, Our team will resolve your issue ASAP",        
          end: true,       
        },       
        {       
          id: "Angular",       
          message:       
            "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",       
          end: true,       
        },       
      ]; 

      return(
        <div id="chat-bot">
        <Segment floated="right">
            <ChatBot steps={steps}/>
        </Segment>
        </div>
      )

 }