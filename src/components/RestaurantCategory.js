// import mockRestaurantMenu from "./mockRestaurantMenu";
import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory=({data,showItems,setShowIndex,dummy})=>{



    const handleClick = () => {

        //THIS IS TOGGLE FUNCTIONALITY


setShowIndex();
    
           
  };
    console.log(data)
    return(
        <div>
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">

  
        {/* <div className="flex justify-between items-center cursor-pointer"></div> */}
        

        {/* <span>{data.title}</span>
        <span>⬇️</span> */}

        
<div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg ">{data.title} ({data.itemCards?.length || 0})  </span>

        <span className="text-xl ">⬇️</span>

        </div>
{showItems && <ItemList items={data.itemCards} dummy={dummy} /> }



</div>

{/*Accordion Content*/}






  
    </div>
    );
}
export default RestaurantCategory;









// const RestaurantCategory = ({ data }) => {
//   return (
//     <div className="w-full bg-gray-50 shadow-lg p-6">
//       <div className="flex justify-between items-center cursor-pointer">
//         <span className="font-semibold">{data.title}</span>
//         <span className="text-xl">🔽</span>
//       </div>

//       <p className="text-gray-500 mt-2">ResCategory</p>
//     </div>
//   );
// };

// export default RestaurantCategory;
