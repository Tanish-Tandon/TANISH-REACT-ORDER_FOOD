import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

import { CDN_URL } from "../utils/constants";


const ItemList=({items,dummy})=>{
    



    const dispatch=useDispatch();

    
    const handleAddItem=(items)=>{

        //dispatch an action

        dispatch(addItem(items))





    }


    return(


        
        <div>

            {items?.map((item,index)=>(
                 <div key={item?.card?.info?.id +"-"+index} className="p-3 m-4 border-gray-300 border-b-3 text-left flex justify-between ">


                    


                   <div className="w-9/12 pr-4">

                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>


                        <span>
                            
                            -
                             ₹
                             {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                        </span>



                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>

                    


                    
                </div>
                <div className="w-3/12 relative">
                        
                     
                        <img 
                            src={CDN_URL + item?.card?.info?.imageId} 
                            className="w-full h-24 object-cover rounded-lg"
                        />
                        
                     
                        <button 
                            className="p-2 bg-black shadow-lg absolute bottom-0 left-1/2 -translate-x-1/2 rounded-md text-white mx-16  cursor-pointer"
                            onClick={()=>handleAddItem(item)}
                    
                        >
                            ADD+
                        </button>
                    </div>
                </div>
            ))}
    
    

      






    </div>



);
    

};
export default ItemList;