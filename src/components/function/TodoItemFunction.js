import React from "react";

export default ({task}) => {
    return(
        <li>
            <h3>{task.id}</h3>
            <h5>{task.title}</h5>
            <p>{task.body}</p>
        </li>
    )
}