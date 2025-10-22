
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData"; 
import { useState } from "react";




const Body=()=>{
    //LOCAL STATE VARIABLE - SUPER POWERFUL REACT VARIABLE
     const[listOfRestaurants,setListOfRestaurant]=useState(resObj.card.card.gridElements.infoWithStyle.restaurants);

    //  //NORMAL JS VARIABLE
    //  let listOfRestaurants = null;



// //NORMAL JS VARIABLE
// let listOfRestaurantsJS = 

        






        const restaurantList = resObj.card.card.gridElements.infoWithStyle.restaurants;
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{

                   const filteredList= listOfRestaurants.filter((res)=>res.info.avgRating>4.4);
                    setListOfRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant</button>
                </div>
            <div className="res-container">



            {
  listOfRestaurants.map((restaurant) => (
    <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
  ))
}

                {/* <Restaurant. Card 
                resData={resObj} /> */}
                

            </div>
        </div>
    ) 
}

export default Body;