// This file is just for creating an empty global context object. 

import React from "react";

const CricketerContext = React.createContext();  // {Provider: , Consumer: }

console.log("Crickter context object", CricketerContext); // empty global object


// {Provider, Consumer, .....}


export default CricketerContext;