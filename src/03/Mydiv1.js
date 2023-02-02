import Mydiv11 from "./Mydiv11";
import { useState } from "react";
import { useEffect } from "react";

const Mydiv1 = ({rname, n, setN}) =>{//probs에 setN함수도 전달 가능
    

    let [cnt, setCnt] = useState(0);//cnt는 리액트가 관리하는 useState 변수이다.

    const addCnt = () => {
        cnt += 1;
        setCnt(cnt);//()안에 바꾸고 싶은 내용. 100으로 바꾸고 싶으면 100넣으면됨.수식쓸 수 있다. if문 쓸 수 없다. 삼항연산자가능
        setN(cnt);
        console.log(cnt);
    }

    useEffect(() => {
        console.log('변경되었습니다...');
    });
    
    useEffect(() => {
        console.log('mydiv 처음입니다...');
        return (
            console.log('종료...')
        )
    }, []);

    useEffect(() => {
        console.log('cnt변경으로 n변경');
        setN(++cnt) ;
    }, [cnt]);

    return(
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {rname} {n} {setN}</h2>
            <Mydiv11 user={rname} divname={'사용자정의'+ cnt} />
            <div className="divbt">
                <button onClick={addCnt}>❤</button>
                <span>{cnt}</span>
            </div>
        </div>
    );
}

export default Mydiv1 ;