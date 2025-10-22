




//   const heading=React.createElement(
//     "h1",
//     { id:"heading",xyz:"abc"},
//     "Hello world from react!"
// );
// console.log(heading);  //object


//     const root=ReactDOM.createRoot(document.getElementById("root"));

//     root.render(heading);







// const parent=React.createElement("div",{id:"parent"},
//   React.createElement("div",{id:"child"},React.createElement("h1",{},"I'm an h1 tag"))

// );

// console.log(parent);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);





// const parent=React.createElement(
//   "div",
//   {id:"parent"},
//   React.createElement("div",{id:"child"},
//     [
//       React.createElement("h1",{},"I'm an h1 tag"),
//       React.createElement("h2",{},"I'm an h2 tag"),
//     ])
//   );

//   console.log(parent);


//   const root=ReactDOM.createRoot(document.getElementById("root"));

//   root.render(parent);



// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const parent=React.createElement(
//   "div",
//   {id:"parent"},
//  [ React.createElement("div",{id:"child1",key:"child1"},
//     [
//       React.createElement("h1",{id: "h1", key: "h1_child1"},"I'm a h1 tag"),
//       React.createElement("h2",{id: "h2", key: "h2_child1"},"THIS IS TANISH TANDON HERE SO BE READY BRO"),
//     ]),
//    React.createElement("div",{id:"child2",key:"child2"},
//     [
//       React.createElement("h1",{id: "h1", key: "h1_child2"},"I'm an h1 tag"),
//       React.createElement("h2",{id: "h2", key: "h2_child2"},"I'm an h2 tag"),
//     ])]
//   );

//   console.log(parent);


//   const root=ReactDOM.createRoot(document.getElementById("root"));

//   root.render(parent);


  
  

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// //REACT ELEMENT

// // const heading=React.createElement("h1",{id:"heading"},"NAMASTE REACT");

// // console.log(heading); //object


// //JSX is not an HTML  inside JAVASCript


// //REACT ELEMENT
// const Heading=(
// <h1 className="head" tabIndex="5">
//   Namaste React using JSX
//   </h1>
//    );//THIS PIECE OF CODE IS JSX
// //jsxheading is a element 

// console.log(jsxHeading); //object


 







// const root=ReactDOM.createRoot(document.getElementById("root"));


// root.render(Heading);


// //JSX =react.createElement=ReactElement-JS Object=HTMLElement(render)

 



// 



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const elam=<span>React Element</span>


// const HeadingComponent=()=>{
//   <div id="container">
//     <h1 className="heading">NAMASTE REACT FUNCTIONAL COMPONENT</h1>
//     </div>
// };


// const Title=()=>(
//   <h1 className="head" tabIndex="5">
//     {elam}
//     Namaste React using JSX
//     <HeadingComponent />
//   </h1>
// );


// // const number=1000;

// //we can use normal function instead of arrow //function


// //component composition
// // const HeadingComponent=()=>(
// //   <div id="container">
// // {/* 
// //      //we can inject any js code inside curly braces
// //     { <h2>{number}</h2>
// //      <h2>{200+300}</h2> }  */}

// //     <Title />
 

// //     <h1 className="heading">Namaste React functional component</h1>
// //     </div>
// //     );

//     const root=ReactDOM.createRoot(document.getElementById("root"));

//     root.render(<HeadingComponent />);





// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Title=()=>(
//   <h1 className="head" tabIndex="5">
//   Namaste React using JSX
//   </h1>
// );


// const HeadingComponent=()=>(
//   <div id="container">
//     {/* ALL RELATED TO BELOW ABOUT ALL DO SAME TASK */}
//     {/* <Title />
//     <Title /> */}

//     {Title()}
//     <h1 className="heading">NAMASTE REACT FUNCTIONAL COMPONENT</h1>
//     </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);






















// HEADER
//-LOGO
//-NAVIGATION






//BODY
//-SEARCH
//-RESTAURANT CONTAINER
//  -RESTAURANT 
//.    -img
//.     -name of res,star Raiting,cuisine,delivery tie


 

//FOOTER
//-LINKS
//copyrights
//-CONTACT
//-ADDRESS
//-SOCIAL LINKS



// const Title=()=>(
//     <h1 className="head" tabIndex="5">
//     Namaste React using JSX
//     </h1>
// );

// const HeadingComponent=()=>(
//     <div id="container">
//         <Title />
//         {Title()}
//         <h1 className="heading">NAMASTE REACT FUNCTIONAL COMPONENT</h1>

//     </div>



// );
















import React from "react"; 
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";














const AppLayout = () => {
    
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);






















