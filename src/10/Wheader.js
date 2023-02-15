import { Link } from "react-router-dom";


const Wheader = ({title}) => {
    return(
        <>
            <div className="wheader">
                <h1 className="h1">{title}<Link to="/">🔺</Link></h1>
                
            </div>
        </>
    );
}
export default Wheader;