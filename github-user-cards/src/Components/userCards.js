import React from 'react';


const UserCards = props =>{
    console.log("props from user", props)
    return(
        <div>
            <h1>{props.user.login}</h1>
            <img src ={props.user.avatar_url}/>
        </div>
    )
}

export default UserCards