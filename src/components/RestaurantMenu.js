import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{

    const [resInfo,setResInfo]=useState(null);


    useEffect(()=>{
        fetchMenu();

    },[]);


    const fetchMenu = async () => {
        
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
        setResInfo(json.data);
        
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const restaurantInfo = resInfo.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
  
const { name, cuisines, costForTwo: costForTwoMessage } = restaurantInfo;



const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards);



    return (


        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")}-{costForTwoMessage}</p>


            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>

        </div>
    );
};

export default RestaurantMenu;






