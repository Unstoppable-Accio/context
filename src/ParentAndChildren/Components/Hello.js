
import React from "react";

  // {name, children}
const Hello = (props) => {

    return (
        <div style={{background:"wheat"}}>

            <h1>Hello World</h1>
            <p>I am in Hello.js file</p>
            {props.children}
 
        </div>
    );
}

export default Hello;




 {/* <p>My name is {name}</p> */}

            {/* {children} */}
// How can I access only the first children