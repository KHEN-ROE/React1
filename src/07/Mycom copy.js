import { useState, useEffect, useRef } from "react";

const Mycom = () =>{
    //컴포넌트 내부 변수
    let cnt1 = 0;

    //컴포넌트 state변수
    const [cnt2, setCnt2] = useState(0); //let, const 둘 다 가능

    //ref변수
    const cnt3 = useRef(0);


    //온클릭 시 호출되는 함수

    const showCnt = () => {//cnt1 올라가는데, state 변수 바뀌면 초기화됨
        console.log(`cnt1=${cnt1}`)
        console.log(`cnt2=${cnt2}`)
        console.log(`cnt3=${cnt3.current}`)
        
    }


    const addCnt1 =() => {
        cnt1 = cnt1 +1;
        showCnt();
    }

    const addCnt2 =() => { //
        setCnt2(cnt2 +1);
    }

    const addCnt3 =() => { //state 는 바뀔 때마다 랜더링, but ref는 바뀌어도 랜더링 안함. 대신 값을 저장하고 있다가 랜더링되면 변화된 값을 보여줌. 특정 시점에 변화를 보여주고 싶을 때 ref를 쓴다.
        cnt3.current = cnt3.current +1;
        showCnt();
    }

    useEffect(()=>{
        showCnt();
    },[cnt2])

    return(
        <>  
            <ul>
                <li>cnt1 = {cnt1}</li>
                <li>cnt2 = {cnt2}</li>
                <li>cnt2 = {cnt3.current}</li>
            </ul>
            <form>
                <input type="button" value="cnt1증가" onClick={addCnt1}/ >
                <input type="button" value="cnt2증가" onClick={addCnt2}/ >
                <input type="button" value="cnt3증가" onClick={addCnt3}/ >
                {/* <button>cnt1증가</button>  이렇게 해도 똑같다 */}
            </form>
        </>
    );
}
export default Mycom;