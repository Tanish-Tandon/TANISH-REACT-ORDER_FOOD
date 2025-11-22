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
// //     { <h2>{number}</h2}
// //      <h2>{200+300}</h2> }  */}

// //     <Title />


// //     <h1 className="heading">Namaste React functional component</h1>
// //     </div>
// //     );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);





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

import "./src/index.css";

import React,{lazy,Suspense, useEffect, useState} from "react";
// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
// import About from "./components/About";
import Contact from "./src/components/Contact.js";
import Error from "./src/Error.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom";
import useOnlineStatus from "./src/utils/useOnlineStatus.js";
import OfflineGame from "./src/components/OfflineGame.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// import Grocery from "./components/Grocery";
import UserContext from "./src/utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
import Cart from "./src/components/Cart";

const Grocery=lazy(()=>import("./src/components/Grocery.js"));
const About=lazy(()=>import("./src/components/About.js"));


const AppLayout = () => {




  const [userName,setUserName]=useState();

//authentication
  useEffect(()=>{

    //make an api call and send username and password

    const data={
      name:"TANISH TANDON",
    }

    setUserName(data.name);

  },[]);






  return (
    //provider is from redux tool kit
    
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>

    </UserContext.Provider>

    </Provider>
  );
}; 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />, 
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>, 
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/Grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}> <Grocery /> </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/offlinegame",
        element:<OfflineGame />
      },

      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement : <Error />
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

const root = ReactDOM.createRoot(document.getElementById("root"));



const MainApp = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      {onlineStatus ? <RouterProvider router={appRouter} /> : <OfflineGame />}
    </>
  );
};

root.render(<MainApp />);


<Route path="/restaurants/:resId" element={<RestaurantMenu />} />;


