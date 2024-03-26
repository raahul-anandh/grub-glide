import React from "react";
import "./styles/Admin.css";
import adminAction from "../Database/Images/admin.js";
import {AdminCard, CreateAdminCard} from "./AdminCard";

function Admin(){
    return(
        <div>
            <h1 className="welcome-admin">Welcome Admin, What do you wanna do today?</h1>
            <div className="all-admin-actions">
                {adminAction.map(CreateAdminCard)}
            </div>
            
        </div>
       
    )
}

export default Admin;