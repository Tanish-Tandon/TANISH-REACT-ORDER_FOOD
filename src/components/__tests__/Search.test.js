import { render, screen, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should render the body component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });



//   const cardsBeforeSearch=screen.getAllByTestId("resCard");

//   expect(cardsBeforeSearch.length).toBe(8);










//   const searchBtn = screen.getByRole("button", { name: "Search" });




//   const searchInput=screen.getByTestId("searchInput")



//   fireEvent.change(searchInput,{target:{ value:"Burger"}});


//   fireEvent.click(searchBtn)


//    const cardsAfterSearch=screen.getAllByTestId("resCard");
//    expect(cardsAfterSearch.length).toBe(1); 

















const cardsBeforeFilter=screen.getAllByTestId("resCard")

expect(cardsBeforeFilter.length).toBe(8)






const topRatedBtn=screen.getByRole("button",{
    name:"Top Rated Restaurant",
})


fireEvent.click(topRatedBtn);


const cardsAfterFilter=screen.getAllByTestId("resCard")


expect(cardsAfterFilter.length).toBe(5);

});




//FETCH USE KARO TOH ACT USE KARO