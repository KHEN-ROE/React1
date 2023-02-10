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
                <Route path="/page1/:item" element={<RoutePage1 />} />
                {/* 보낼 때는 :item  */}
                <Route path="/page2" element={<RoutePage2 />} />
            </Routes>
        </>
    ); 
}

export default RouteMain;