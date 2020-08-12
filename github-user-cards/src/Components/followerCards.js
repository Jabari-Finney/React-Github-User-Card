import React from 'react';



const FollowerCards = props =>{
    console.log(props)
    return(
        <div>
            {props.followers.map(follower =>{
                return(
                    
                    <div key={follower.id}>
                        <h1>{follower.login}</h1>
                      <img src ={follower.avatar_url}/>  
                    </div>
                )
            })}
        </div>
    )
}

export default FollowerCards