import Wheader from "./Wheader";
import { Link } from "react-router-dom";
import './W.css'
const Wmenu = () => {
    return(
        <div className="content">
            <Wheader title={'일기예보'} />
            <ul>
                <li><Link to="/W1">단기</Link></li>
                <li><Link to="/W2">중기</Link></li>
            </ul>
        </div>
    );
}
export default Wmenu;