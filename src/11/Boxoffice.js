import { useState, useEffect, useRef } from "react";
import BoxofficeList from "./BoxofficeList";
import './Boxoffice.css'

const Boxoffice = () => {

    //상영일 선택 state변수
    const [targetDt,setTargetDt] = useState();

    //input 제어
    const mvdr = useRef();

    //처음 랜더링 딱한번
    useEffect(()=>{
        mvdr.current.focus();
    },[])

    //targetDT 변경 시
    useEffect(()=>{
        console.log("targetDt",targetDt);
    },[targetDt])

    //input 이벤트
    const handleMv = () => {
        console.log(mvdr.current.value)
        setTargetDt(mvdr.current.value.replaceAll('-','')) ; //-잘라내기 위해 replaceAll 함수 사용. 그냥 replace 하면 - 하나만 바뀜
    }

    return(
        <>
            <div className="mvh">
                <h1>박스오피스</h1>
                <form>
                    <input type="date" name="mvd" ref={mvdr} onChange={handleMv} />
                </form>
            </div>
            <div className="mvmain">
              {targetDt &&  <BoxofficeList targetDt={targetDt}/> }
              {/* targetDt가 undefined면 실행안한다. 즉 클릭을 안하면 안보여줌 */}
            </div>
        </>
    );
}
export default Boxoffice;