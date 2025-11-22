//GLOBAL CONTEXT

import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:"Default user"


});

export default UserContext;