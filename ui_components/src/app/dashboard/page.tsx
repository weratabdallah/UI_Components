import {UserButton, UserProfile} from "@clerk/nextjs"; // Removed unused UserProfile import
import React from "react";


function dashboard() {
    return (
     <div>
        <UserButton />
        <UserProfile />
     </div>
    );
}
export default dashboard;