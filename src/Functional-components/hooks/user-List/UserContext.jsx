import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider =({children}) => {

    const [Users, setUsers] = useState({
        name:"amaya",
        age:23,
    })
    return(
       <UserContext.Provider value={{Users,setUsers}}>
        {children}
       </UserContext.Provider>

    )
}