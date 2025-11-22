import { useState } from "react";

const User=({name})=>{
    const [count,setCount]=useState(0);
    const [count2]=useState(1);

    useEffect(()=>{

    },[]);
    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count={count}</h1>
            <h2>count2={count2}</h2>
            <h2>Name:{name}</h2>
            <h3>Location:AGRA</h3>
            <h4>Contact:7983462</h4>
            


        </div>
    );
};

export default User; 
