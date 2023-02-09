import RouteNv from "./RouteNv"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import { Route,Routes } from "react-router-dom"
const RouteMain = () => {

    return(
        <>
            <RouteNv />
            <Routes>
                <Route path="/" element={<RouteHome />} />
                <Route path="/p1" element={<RoutePage1 />} />
                <Route path="/p2" element={<RoutePage2 />} />
            </Routes>
        </>
    ); 
}

export default RouteMain;