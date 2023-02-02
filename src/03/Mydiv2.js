import Mydiv21 from "./Mydiv21";

const Mydiv2 = (probs) =>{
    const user3 = probs.user3;
    const n1 = probs.n1;
    
    return(
        <div className="mydiv2">
            <h2 className="divh2">Mydiv2 {user3} {n1} </h2>
            <Mydiv21 user2={user3} n2= {n1} />
        </div>
    );
}

export default Mydiv2 ;