import React from "react";
import "./Pokemon.css";

function Pokemon(props) {
    console.log(props);
    return (  
        <div key={props.prop.name}>
            <div>{props.prop.name}</div>
            <a href={props.prop.url}>{props.prop.url}</a>
        </div>
    )
}

export default Pokemon;