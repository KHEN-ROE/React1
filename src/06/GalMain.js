import { useEffect, useState } from "react";
import GalC1 from "./GalC1";
import GalC2 from "./GalC2";
import Ghead from "./Ghead";


const GalMain = ({c1, c2, data1}) => {
    
    //선택된 대분류
    let [selc1, setSelc1] = useState();

    //선택된 대분류에 해당하는 상세내용 저장
    let [selData, setSelData] = useState({});

    

    useEffect(()=>{
        console.log(selc1)
    },[selc1])

    useEffect(()=>{
        if(selc1){
            setSelData(data1.filter((item)=>item.galTitle===selc1)[0])
        }
    },[selc1])

    useEffect(()=>{
        console.log(selData);
    },[selData])


    
    return(
        <div className="content">
            <div className="header">
                <Ghead />
            </div>

            <div className="main">
                <GalC1 c1={c1} setSelc1={setSelc1} />
                <GalC2 selData={selData} />
            </div>
        </div>
    );
}
export default GalMain;