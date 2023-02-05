import Mydiv11 from "./Mydiv11";
import { useState } from "react";
import { useEffect } from "react";

const Mydiv1 = (probs) =>{//probs에 setN함수도 전달 가능
    const user1 = probs.user1;

    let [cnt, setCnt] = useState(0);//cnt는 리액트가 관리하는 useState 변수이다. set은 cnt를 변화시켜주는 역할을 하는 함수다

    const addCnt = () => {
        cnt+=1;
        setCnt(cnt);//()안에 바꾸고 싶은 내용. 100으로 바꾸고 싶으면 100넣으면됨.수식쓸 수 있다. if문 쓸 수 없다. 삼항연산자가능
        probs.setN(cnt);//부모 컴포넌트에서 관리하고 싶은 태그를 여기다 넘겨줌
    
    }

    // useEffect(() => {
        //랜더링이 될때마다 실행
    //     console.log('변경되었습니다...');
    // });
    
    // useEffect(() => {
          //최초 한번만 실행하고 싶을 때
    //     console.log('mydiv 처음입니다...');
    //     return (
    //         console.log('종료...')
    //     )
    // }, []);

    // useEffect(() => {  //스테이트 변수가 바뀔 때 실행하고 싶은 경우. 배열 안에 검사하고 싶은 값 삽입
    //     console.log('cnt변경으로 n변경');
    //     setN(++cnt) ;       
    // }, [cnt]);

    return(
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {user1} n={probs.n1}</h2>
            <Mydiv11 user2 = {user1} divname = {'사용자정의'+ cnt} />
            
            <div className="divbt">
                <button onClick={addCnt}>❤</button>
                <span>{cnt}</span>
            </div>
        </div>
    );
}

export default Mydiv1 ;