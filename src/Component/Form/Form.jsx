import React from "react"
import './Form.css'

function Form( {type}){

    return (
        <>
        <div className="container">

            <div className="form">
                <h2>{type === "Login" ? "Login": "Register"}</h2>
                {/* <label>Username</label> */}
                {/* <label>Email</label> */}
                <input type="text" placeholder="Email" />
                {/* <label>Password</label> */}
                <input type="text" placeholder="Password" />
                {type ==="register" && (

                    // <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Confirm Password" />
                )}
                
                
                <button>{type ==="Login" ? "Login" : "register"}</button>

            </div>
        </div>
        </>
    ); 

}

export default Form