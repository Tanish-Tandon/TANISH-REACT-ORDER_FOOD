import { fireEvent, render,screen } from "@testing-library/react";

import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"



it("Should load Header Component with a login button",()=>{
    render(



        <BrowserRouter>
        <Provider store={appStore}>

               <Header />

        </Provider>
        </BrowserRouter>
    
    
    
    
    
    
 





);



const loginButton=screen.getByRole("button",{name:"Login"});

// const loginButton=screen.getByText("Login");


expect(loginButton).toBeInTheDocument();







});













it("Should render Header Component with a Cart items 0",()=>{
    render(



        <BrowserRouter>
        <Provider store={appStore}>

               <Header />

        </Provider>
        </BrowserRouter>
    
    
    
    
    
    
 





);






const cartItem = screen.getByText(/Cart/);

expect(cartItem).toBeInTheDocument();



});






it("Should  change login button to logout on click",()=>{
    render(



        <BrowserRouter>
        <Provider store={appStore}>

               <Header />

        </Provider>
        </BrowserRouter>
    
    
    
    
    
    
 





);



const loginButton=screen.getByRole("button",{name:"Login"});




fireEvent.click(loginButton);




const logoutButton=screen.getByRole("button",{name:"Logout"});



expect(logoutButton).toBeInTheDocument();


















});





