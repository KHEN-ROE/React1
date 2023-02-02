import Mydiv21 from "./Mydiv21";
import { useState } from "react";


const Mydiv2 = ({rname, n, setN}) =>{
    
    return(
        <div className="mydiv2">
            <h2 className="divh2">Mydiv2 {rname} {n} {setN} </h2>
            <Mydiv21 user={rname}/>
        </div>
    );
}

export default Mydiv2 ;