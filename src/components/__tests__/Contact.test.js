import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";//to be document come from this library








//describe FOR MULTIPLE TEST CASES 
// WE USE test and it both are same ANOTHER NAME for test

describe("Contact Us Page Test Cases",()=>{



    beforeAll(()=>{
        console.log("Before All")

    });






    beforeEach(()=>{
        console.log("Before Each")

    });





    afterAll(()=>{
        console.log("After All")

    });





    afterEach(()=>{
        console.log("After Each")

    });








    it("Should load contact us component",()=>{



    render(<Contact />);


   const heading= screen.getByRole("heading");



   expect(heading).toBeInTheDocument();










});







test("Should load button inside the contact component",()=>{


    render(<Contact />);


   const button= screen.getByRole("button");



   expect(button).toBeInTheDocument();

});
 







test("Should load input name inside Contact us component",()=>{


    render(<Contact />);


   const inputName= screen.getByPlaceholderText("name");



   expect(inputName).toBeInTheDocument();

});








test("Should load 2 input boxes on the Contact component",()=>{
    render(<Contact />);


    const inputBoxes=screen.getAllByRole("textbox");


    // expect(inputBoxes.length).toBe(2);

        expect(inputBoxes.length).toBeTruthy();








});








    
})



//HERE WE DO UNIT TESTING 
