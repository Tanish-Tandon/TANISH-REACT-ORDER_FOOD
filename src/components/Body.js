
import RestaurantCard from "./RestaurantCard";

import { useState,useEffect } from "react";

import Shimmer from "./Shimmer";




const Body=()=>{
    //LOCAL STATE VARIABLE - SUPER POWERFUL REACT VARIABLE
     const[listOfRestaurants,setListOfRestaurant]=useState([]);



     useEffect(()=>{
        fetchData();
     },[]);

     const fetchData=async()=>{
        const data=await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );
        const json=await data.json();

        console.log(json);


   
setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



     };

     if(listOfRestaurants.length===0){
        return <Shimmer />;
     }



     

    //  console.log("BODY RENDERED");    //  //NORMAL JS VARIABLE
    //  let listOfRestaurants = null;



// //NORMAL JS VARIABLE
// let listOfRestaurantsJS = 

        


 



     
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{

                   const filteredList= listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
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