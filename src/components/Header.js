import { LOGO_URL } from "../utils/constants";
import { useState,useEffect, use } from "react";

import {Link} from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";



 const Header = () => {
    const[btnNamereact,setBtnNameReact]=useState("Login");

    // console.log("Header render")

    const onlineStatus=useOnlineStatus();



    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[btnNamereact]);
    
    return (
        <div className="header">
            <div className="logo-container">
                 <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>

                    <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>

                    <li>Cart</li>
                    <button className="login" onClick={()=>{ btnNamereact==="Login"?
                        setBtnNameReact("Logout"):
                        setBtnNameReact("Login");

                    }}>
                        {btnNamereact}
                    </button>
                </ul>
            </div>
        </div>
    );   
};

export default Header;

 