
import RestaurantCard from "./RestaurantCard";

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

import useOnlineStatus  from "../utils/useOnlineStatus";




const Body=()=>{
    //LOCAL STATE VARIABLE - SUPER POWERFUL REACT VARIABLE
     const[listOfRestaurants,setListOfRestaurant]=useState([]);

     const [filteredRestaurants,setFilteredRestaurant]=useState([]);


     const [searchText,setSearchText]=useState("");

     console.log("Body Rendered");



     useEffect(()=>{
        fetchData();
     },[]);

     const fetchData=async()=>{
        const data=await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );
        const json=await data.json();

        console.log(json);




//         const restaurants =
//     json?.data?.cards
//       ?.find(
//         (card) =>
//           card?.card?.card?.gridElements?.infoWithStyle?.restaurants
//       )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//   setFilteredRestaurants(restaurants);
// };




   
setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);




     };


const onlineStatus=useOnlineStatus();
if(onlineStatus===false)
    return(
<h1>
    LOOK LIKE YOU'RE ABSENT!! PLEASE CHECK YOUR MINDSEND
</h1>
);




     //CONDITIONAL RENDERING

   



     

    //  console.log("BODY RENDERED");    //  //NORMAL JS VARIABLE
    //  let listOfRestaurants = null;



// //NORMAL JS VARIABLE
// let listOfRestaurantsJS = 

        


 



     
    return listOfRestaurants.length===0 ? <Shimmer /> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />


                    <button onClick={()=>{
                        console.log(searchText);

                        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{

                   const filteredList= listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
                    setFilteredRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant</button>
                </div>
            <div className="res-container">



            {
  filteredRestaurants.map((restaurant) => (
                    <Link 
                        key={restaurant.info.id} 
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                  
                ))
            } 
          

                {/* <Restaurant. Card 
                resData={resObj} /> */}
                
            </div>
        </div>
    ) 
}

export default Body;
