import React from "react";
import "./styles/AdminCard.css";

function AdminCard(props){
    return(
        <div className="admin-card">
            <img src={props.imgUrl} alt={props.actionName}/>
            <p>{props.desc}</p>
        </div>
    )
}

function CreateAdminCard(action){
    return(
        <AdminCard 
            imgUrl={action.imgUrl}
            desc={action.desc}
            actionName={action.actionName}
        />
    )
}

export {AdminCard, CreateAdminCard};