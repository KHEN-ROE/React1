import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css' ;
import { useState } from "react";

const Mydiv = () => { //리액트의 함수형 컴포넌트는 반드시 대문자로 시작. 파일명과 똑같이 
    const rname = 'React!' ; 
    let[n, setN] = useState(0);

    const upN = () => {
        n+=1;
        setN(n);
    }

    return(//h1 태그가 나가는 거임. 그래서 사용자 정의 태그라고 함
        <div className="content">
            <div className="header">
                <h1 onClick={upN}>컴포넌트 예제 {rname} {n}</h1> 
            </div>
            <div className="main">
                <Mydiv1 user1={rname} n1={n} setN ={setN} /> 
                <Mydiv2 user3={rname} n1={n} />
            </div>
        </div>
    ) ;
}

export default Mydiv;