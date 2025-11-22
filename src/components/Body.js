
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";

import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";

import useOnlineStatus  from "../utils/useOnlineStatus";


import UserContext from "../utils/UserContext";
import User from "./User";




const Body=()=>{
    //LOCAL STATE VARIABLE - SUPER POWERFUL REACT VARIABLE
     const[listOfRestaurants,setListOfRestaurant]=useState([]);

     const [filteredRestaurants,setFilteredRestaurant]=useState([]);


     const [searchText,setSearchText]=useState("");

    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

     console.log("Body Rendered",listOfRestaurants);



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
    LOOK LIKE YOU'RE ABSENT!! PLEASE CHECK YOUR MINDSET
</h1>

);

const {loggedInUser,setUserName}=useContext(UserContext);




     //CONDITIONAL RENDERING

   



     

    //  console.log("BODY RENDERED");    //  //NORMAL JS VARIABLE
    //  let listOfRestaurants = null;



// //NORMAL JS VARIABLE
// let listOfRestaurantsJS = 

        


 



     
    return listOfRestaurants.length===0 ? <Shimmer /> :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">


                    <input type="text" 
                    data-testid = "searchInput"
                    className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-3xl" onClick={()=>{
                        console.log(searchText);

                        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search</button>
                </div>


                  <div className="search m-4 p-4">
                    <label>UserName:</label>
                    <input className="border border-black p-2"
                    value={loggedInUser}
                     onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div className="search m-4 p-4">
                <button className="px-4 py-2 bg-gray-100 m-4 rounded-xl" onClick={()=>{

                   const filteredList= listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
                    setFilteredRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant</button>
                    </div>
                </div>
            <div className="flex flex-wrap">
        

        



            {
  filteredRestaurants.map((restaurant) => (
                    <Link 
                        key={restaurant.info.id} 
                        to={"/restaurants/" + restaurant.info.id}
                    >
                       {
                        restaurant?.info?.promoted? (<RestaurantCardPromoted resData={restaurant} 
                       /> ):(
                        <RestaurantCard resData={restaurant} />
                         ) }
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














 







































// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import useOnlineStatus from "../utils/useOnlineStatus";

// // 🧩 Chakra UI Imports
// import {
//   Box,
//   Button,
//   Input,
//   Flex,
//   Text,
//   useColorMode,
// } from "@chakra-ui/react";

// const Body = () => {
//   // 🌐 Local state
//   const [listOfRestaurants, setListOfRestaurant] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const { colorMode, toggleColorMode } = useColorMode();
//   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();

//     const restaurants =
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants || [];

//     setListOfRestaurant(restaurants);
//     setFilteredRestaurant(restaurants);
//   };

//   // 🧠 Handle Offline Case
//   const onlineStatus = useOnlineStatus();
//   if (onlineStatus === false)
//     return (
//       <Box textAlign="center" mt={10}>
//         <Text fontSize="2xl" color="red.400" fontWeight="bold">
//           LOOKS LIKE YOU'RE OFFLINE! PLEASE CHECK YOUR CONNECTION ⚡
//         </Text>
//       </Box>
//     );

//   // 🕗 Loading Shimmer
//   if (listOfRestaurants.length === 0) return <Shimmer />;

//   return (
//     <Box
//       className="body"
//       bg={colorMode === "light" ? "gray.100" : "gray.700"}
//       color={colorMode === "light" ? "black" : "white"}
//       minH="100vh"
//       py={5}
//     >
//       {/* 🔘 Filter & Search Section */}
//       <Flex
//         justify="center"
//         align="center"
//         wrap="wrap"
//         gap={4}
//         className="filter"
//         mb={6}
//       >
//         {/* 🌙 Dark/Light Toggle */}
//         <Button
//           colorScheme="purple"
//           onClick={toggleColorMode}
//           borderRadius="full"
//         >
//           Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
//         </Button>

//         {/* 🔍 Search Input + Button */}
//         <Flex align="center" gap={3}>
//           <Input
//             placeholder="Search for restaurants..."
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             width="250px"
//             focusBorderColor="teal.400"
//             bg={colorMode === "light" ? "white" : "gray.600"}
//           />
//           <Button
//             colorScheme="teal"
//             borderRadius="full"
//             onClick={() => {
//               const filtered = listOfRestaurants.filter((res) =>
//                 res.info.name
//                   .toLowerCase()
//                   .includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filtered);
//             }}
//           >
//             Search
//           </Button>
//         </Flex>

//         {/* ⭐ Top Rated Filter */}
//         <Button
//           colorScheme="orange"
//           borderRadius="full"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.info.avgRating > 4.2
//             );
//             setFilteredRestaurant(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </Button>
//       </Flex>

//       {/* 🍴 Restaurant List */}
//       <Flex flexWrap="wrap" justify="center" gap={6}>
//         {filteredRestaurants.map((restaurant) => (
//           <Link
//             key={restaurant.info.id}
//             to={"/restaurants/" + restaurant.info.id}
//           >
//             {restaurant?.info?.promoted ? (
//               <RestaurantCardPromoted resData={restaurant} />
//             ) : (
//               <RestaurantCard resData={restaurant} />
//             )}
//           </Link>
//         ))}
//       </Flex>
//     </Box>
//   );
// };

// export default Body;
