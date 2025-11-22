import User from "./User";
import UserClass  from "./UserClass";

//import React from "react"; 
import {Component} from "react";

import UserContext from "../utils/UserContext";





//when you make the parent also class based component then only you can use the lifecycle methods

//class About extends React.Component
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render(){
        console.log("Parent Render");
         return (
        <div>
             <h1>About CLassComponent</h1>
             <div>
              LoggedIn User
              <div>

                <UserContext.Consumer>

                  {({loggedInUser})=>(<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
                </UserContext.Consumer>

              </div>

             </div>
            <h2>This is Namaste React Web series</h2>
          
            <UserClass name={"first (CLASS)" } location={"AGRA"} />

               {/* <UserClass name={"TIM COOK (CLASS)" } location={"US"} /> */}




        </div>
    );
};
    };



export default About;

//WRONG
/*
parent constructor
parent render-
  Tanish constructor
  tanish render
  tanish component did mount



  --tim cook constructor
  tim cook render
  tim cook component did mount



parent component did mount

*/



//right
/*

parent constructor
parent render-
  Tanish constructor
  tanish render
 


  --tim cook constructor
  tim cook render


<DOM UPDATED IN SINGLE BATCH>

  tanish component did mount
  tim cook component did mount



parent component did mount

*/

// 1.Tanish 2.Tim