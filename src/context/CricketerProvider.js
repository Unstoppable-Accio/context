import React, {useState} from "react";
import CricketerContext from "./CricketerContext"; 



const CricketerProvider = (props) => {
    const [cricketer, setCricketer] = useState({
        name: "Mahendar Singh Dohni",
        age: 40,
        retire: true,
        wickets: 1,
    });

    return(
        <CricketerContext.Provider value={
            {
                cricketer: cricketer,
                setCricketer: setCricketer
            }

        }>
            {props.children}
        </CricketerContext.Provider>

    )


}

export default CricketerProvider;