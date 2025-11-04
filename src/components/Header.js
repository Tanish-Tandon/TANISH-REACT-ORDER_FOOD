// import { LOGO_URL } from "../utils/constants";
// import { useState,useEffect, use } from "react";

// import {Link} from "react-router-dom";

// import useOnlineStatus from "../utils/useOnlineStatus";



//  const Header = () => {
//     const[btnNamereact,setBtnNameReact]=useState("Login");

//     // console.log("Header render")



//     const onlineStatus=useOnlineStatus();



//     // useEffect(()=>{
//     //     console.log("useEffect called");
//     // },[btnNamereact]);
    
//     return (
//         <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50  lg:bg-green-50">
//             <div className="logo-container">
//                  <img
//                     className="w-56"
//                     src={LOGO_URL}
//                 />
//             </div>
//             <div className="flex items-center">
//                 <ul className="flex p-4 m-4">

//                     <li className="px-4">Online Status:{onlineStatus?"✅":"🔴"}</li>
//                     <li className="px-4">
//                     <Link to="/">Home</Link>
//                     </li>
//                     <li className="px-4">
//                         <Link to="/about">About Us</Link>
//                     </li>
//                     <li className="px-4">
//                         <Link to="/contact">Contact Us</Link>
//                     </li>

//                     <li className="px-4">
//                         <Link to="/grocery">Grocery</Link>
//                     </li>

//                     <li className="px-4">Cart</li>
//                     <button className="login" onClick={()=>{ btnNamereact==="Login"?
//                         setBtnNameReact("Logout"):
//                         setBtnNameReact("Login");

//                     }}>
//                         {btnNamereact}
//                     </button>
                    
//                 </ul>
//             </div>
//         </div>
//     );   
// };

// export default Header;

 



































import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNamereact, setBtnNameReact] = useState("Login");
  const [darkMode, setDarkMode] = useState(false);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-lg bg-pink-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">

        


      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="Logo" />
      </div>

      <ul className="flex items-center space-x-6">
        <li>Online: {onlineStatus ? "✅" : "🔴"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li>Cart</li>

        <button
          className="px-3 py-1 rounded border dark:border-white hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() =>
            setBtnNameReact(btnNamereact === "Login" ? "Logout" : "Login")
          }
        >
          {btnNamereact}
        </button>

        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded border dark:border-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </ul>
    </div>
  );
};

export default Header;
