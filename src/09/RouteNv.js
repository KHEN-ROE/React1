import { Link } from "react-router-dom"; 

const RouteNv = () => {
    return(
        <>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/page1">페이지1</Link></li>
                <li><Link to="/page2">페이지2</Link></li>
            </ul>
        </>
    );
}

export default RouteNv;