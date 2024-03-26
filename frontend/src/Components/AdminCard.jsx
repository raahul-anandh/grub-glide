import React from "react";
import "./styles/AdminCard.css";

import { useNavigate } from 'react-router-dom';

function AdminCard(props){
    const navigate = useNavigate();
    return(
        <div className="admin-card" onClick={() => navigate(`${props.link}`)}>
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
            link = {action.link}
        />
    )
}

export {AdminCard, CreateAdminCard};