// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import mockData from "../utils/mockRestaurantMenu";
// import { useParams } from "react-router-dom";


// const RestaurantMenu=()=>{

//     const [resInfo,setResInfo]=useState(null);


//     useEffect(()=>{
//         fetchMenu();

//     },[]);


//     const fetchMenu = async () => {
        
//             const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER");

            
//             const json = await data.json();
//             console.log(json);
//         setResInfo(json.data);
        
//     };

//     if (resInfo === null) {
//         return <Shimmer />;
//     }

//     const restaurantInfo = resInfo.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
  
// const { name, cuisines, costForTwo: costForTwoMessage } = restaurantInfo;




//     return (


//         <div className="menu">
//             <h1>{name}</h1>
//             <p>{cuisines?.join(", ")}-{costForTwoMessage}</p>


//             <h2>Menu</h2>
//             <ul>
//                 <li>Biryani</li>
//                 <li>Burgers</li> 
//                 <li>Diet Coke</li>
//             </ul>

//         </div>
//     );
// };

// export default RestaurantMenu;


///THIS IS A PARENT FOR RESTAURANT CATEGORY AND ITEM LIST AND THIS CONTROL THEIR CHILDREN

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import mockData from "./mockRestaurantMenu";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu  from "../utils/useRestaurantsMenu";
import { Link } from "react-router-dom";

import {mockRestaurantMenu} from "../components/mockRestaurantMenu";


import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";


const RestaurantMenu = () => {
   // const [resInfo, setResInfo] = useState(null);

    const {resId}=useParams();


    const dummy="DUMMY DATA"

    const resInfo=useRestaurantMenu(resId);



    // useEffect(() => {
      
    //     const timer = setTimeout(() => {
           
    //         setResInfo(mockData.data);
    //     }, 500); 

    
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []); 

    const [showIndex, setShowIndex] = useState(null);
   
    if (resInfo === null) {
        return <Shimmer />;
    }

   
  const restaurantInfo = resInfo.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = restaurantInfo;

    const { itemCards } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    // console.log(itemCards)






    // const categories=resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    //   c.data?.cards?.card?.card?.["@type"]===
    //   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    // );
    // console.log(categories);




   



    // Assuming 'allMenuCards' is already defined as in your example
const allMenuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;



const categories = allMenuCards.filter((c) => {
  const cardType = c?.card?.card?.["@type"];
  return (
    cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
    cardType === "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
  );
});



// console.log(categories);






return (
  <div className="text-center">

    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
{/* 
    <h2>Menu</h2>
    <ul>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>{item.card.info.name} - ₹{Math.round(item.card.info.price/100)|| Math.round( item.card.info.defaultPrice /100) }</li>
      ))}
    </ul> */}


{categories.map((category,index)=>(

//THIS IS  CONTROLLED COMPONENT FOR ACCORDION 
  <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          //THIS IS BELOW FEATURE CONTROL THE COLLAPSE ONE WHEN SWE OPEN ONE THING
          showItems={index === showIndex}


          //THIS I+FUNCTION IS BASICALLY RESPONSIBLE TO SETTING THE INDEX FOR OUR
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}

          dummy={dummy}
        />
    
))}



  </div>
);
};

export default RestaurantMenu;



//display the data