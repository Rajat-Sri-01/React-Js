import React from "react";
import UserContext from "../Context/UserConext";
import { useContext } from "react";

function Profile(){
    const {user} = useContext(UserContext) 

    if(!user) 
        return <div>Please Help</div>
    
    return <div>Welcome {user.username}</div>

}
export default Profile;