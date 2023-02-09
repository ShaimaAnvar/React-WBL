import React from 'react'
function F1comp(){
    let user= 'shaima'
    function revName(){
        user=user.split("").reverse().join("");
        console.log(user);
    }
    return(
       
        <div>
            <h2>{user}</h2>
            <button onClick={revName}>Reverse</button>

        </div>
    )
}
export default F1comp;