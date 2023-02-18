import Wheader from "./Wheader";
import { Link } from "react-router-dom";
import './W.css'
const Wmenu = () => {
    return(
        <div className="content">
            <Wheader title={'일기예보'} />
            <ul>
                <li className="lm"><Link to="/W1">단기예보</Link></li>
                <li className="lm"><Link to="/W2">중기예보</Link></li>
            </ul>
        </div>
    );
}
export default Wmenu;