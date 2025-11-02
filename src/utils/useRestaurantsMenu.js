// import {  useEffect, useState } from "react";
// // import { MENU_API } from "./constants";
// import mockData from "..components/mockRestaurantMenu";


// const useRestaurantMenu=(resId)=>{
// //fetch data


// const[resInfo,setResInfo]=useState(null);

// useEffect(()=>{
//     fetchData();
// },[]);

// const fetchData=async()=>{
//     const data=await fetch(MENU_API+resId);

//     const json=await data.json();

//     setResInfo(json.data);

// };

//     return resInfo;

// };
// export default useRestaurantMenu;






//fetching the data



import {useEffect,useState} from "react";

import mockData from "../components/mockRestaurantMenu";

const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            await new Promise((resolve)=>setTimeout(resolve,500));
            setResInfo(mockData.data);
        };
        fetchData();
    },[resId]);
    return resInfo;
};

export default useRestaurantMenu;