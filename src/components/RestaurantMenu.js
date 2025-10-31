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




import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import mockData from "./mockRestaurantMenu";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId}=useParams();



    useEffect(() => {
      
        const timer = setTimeout(() => {
           
            setResInfo(mockData.data);
        }, 500); 

    
        return () => {
            clearTimeout(timer);
        };
    }, []); 

    
   
    if (resInfo === null) {
        return <Shimmer />;
    }

   
  const restaurantInfo = resInfo.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = restaurantInfo;

    const { itemCards } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
return (
  <div className="menu">
    <h1>{name}</h1>
    <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>

    <h2>Menu</h2>
    <ul>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>{item.card.info.name} - ₹{Math.round(item.card.info.price/100)|| Math.round( item.card.info.defaultPrice /100) }</li>
      ))}
    </ul>
  </div>
);
};

export default RestaurantMenu;
