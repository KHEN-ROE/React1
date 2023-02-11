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
                {/* 주소 경로에 따라 보여주기 원하는 컴포넌트 설정 */}
                <Route path="/" element={<RouteHome />} />
                <Route path="/page1/:item" element={<RoutePage1 />} />
                {/* page1경로는 RoutePage1을 보여주도록 설정. 그리고 url파라미터는(url에 표시되는 파라미터) /: 뒤에 작성. 즉, /page1/(파라미터값) 이렇게 url에 출력됨  */}
                <Route path="/page2" element={<RoutePage2 />} />
            </Routes>
        </>
    ); 
}

export default RouteMain;