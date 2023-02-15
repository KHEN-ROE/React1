import { Route,Routes } from "react-router-dom"
import Wmenu from "./Wmenu";
import W1 from "./W1";
import W2 from "./W2";

const Wmain = () => {
    return(
        <>
            <Routes>
                {/* path는 url주소를 다음과 같이 설정하겠다. element는 보여주고 싶은 컴포넌트*/}
                <Route path="/" element={<Wmenu />} />
                <Route path="/w1" element={<W1 />} />  
                {/* <Route path="/w1"/:item/:item2 element={<W1 />} /> 값을 여러개 전달하고 싶으면 /: 여러개 쓰면됨       */}
                <Route path="/w2" element={<W2 />} />
            </Routes>
        </>
    );
}
export default Wmain;