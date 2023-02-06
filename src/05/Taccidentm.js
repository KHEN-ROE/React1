import Thead from "./Thead";
import TaccidentC1 from "./TaccidentC1";
import TaccidentC2 from "./TaccidentC2";
import Detail from "./Detail";
import { useState, useEffect } from "react";
const Taccidentm = ({c1, c2, data}) => {
    //데이터 넘어오는 지 확인
    // console.log("c1", c1);
    // console.log("c2", c2);
    // console.log("data", data);

    //선택된 대분류
    let [selc1, setSelc1] = useState(); 
    
    //선택된 대분류에 해당하는 중분류 저장
    let [selc2A, setSelc2A] = useState([]);

     //선택된 중분류
     let [selc2, setSelc2] = useState(); 

    //선택된 항목
    let [selData, setSelData] = useState({});

    //state 변수 변경
    //맨 처음 한 번만 실행
    useEffect(()=>{
        console.log("처음 한번만 실행")
    }, [])

    //해당하는 state 변수가 변경될 때마다
    useEffect(()=> {
        console.log("selc1", selc1)
        setSelc2A(c2.filter((i) => i[0] === selc1))//setSelc2A의 매개변수로 필터함수 전달. 필터 값은 중분류 배열에서 selc1과 일치하는 값들 selc1은 대분류 값들
    }, [selc1]);

    useEffect(() =>{
        console.log("selc2A", selc2A)
    }, [selc2A]);

    useEffect(()=> {//selc2가 변화하면 if안의 명령문을 수행함. 필터함수로 걸러진 새로운 배열이 selData에 저장된다.
        console.log("selc2", selc2);
        if(selc1 && selc2){
            setSelData(data.filter((i)=> i.사고유형_대분류 ===selc1 && i.사고유형_중분류 ===selc2)[0])
        }
    },[selc2]);

    useEffect(()=>{
        console.log(selData)
    },[selData])

    //컴포넌트 랜더링이 일어날 때마다 실행
    // useEffect(()=>{
    //     console.log("랜더링...")
    // })

    return(
        <div className="content">
            <div className="header">
                <Thead />
            </div>

            <div className="main">
                <TaccidentC1 c1={c1} selc1={selc1} setSelc1={setSelc1}/>
                {selc2A && <TaccidentC2 selc2A={selc2A} selc2={selc2} setSelc2={setSelc2} />}
                {selData && <Detail selData={selData}/>}
            </div>
        </div>
    );
}

export default Taccidentm;