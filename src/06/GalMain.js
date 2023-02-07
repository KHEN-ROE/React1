import { useEffect, useState } from "react";
import GalC1 from "./GalC1";
import GalC2 from "./GalC2";
import Ghead from "./Ghead";


const GalMain = ({c1, data1}) => {
    
    //선택된 대분류
    let [selc1, setSelc1] = useState(); //title들을 변화시키기위한 useState를 선언. 변화시키려면 setSelc1을 GalC1에다가 전달하고, GalC1에서 타이틀들을 클릭했을 때 setSelc1이 발동되도록 하면 된다.

    //선택된 대분류에 해당하는 상세내용
    let [selData, setSelData] = useState({});//title들이 클릭됐을 때 구현할 상세내용 변화시킬 useState선언. 근데 왜 오브젝트인가? selData를 전달하는 이유? useEffect에서 연산수행하여 selData에 저장.

    

    // useEffect(()=>{//타이틀들을 클릭할 때마다 state가 변화하게 되는 것이고, 이에 따라 재 랜더링된다. 랜더링이 될 때마다 useEffect는 실행된다. 즉 여기서는 selc1이 변화할 때마다 이 useEffect가 실행된다 
    //     console.log("selc1", selc1)
    // },[selc1])

    useEffect(()=>{//selc1(타이틀)이 클릭될 때마다 if문 수행. 즉, 타이틀이 클릭될 때마다 data1 배열에 대해서 필터함수 발동.galTitle과 클릭한 Selc1이 일치하면 selData에 클릭한 타이틀 저장 
        if(selc1){
            setSelData(data1.filter((item)=>item.galTitle===selc1)[0])//[0]은 선택한 selc1과 data1배열의 galTitle과 일치하면 data1배열의 0번지에 있는 값(그 title이 있는 요소?)을 setData에 저장
        }//이걸 수행하여 selData에 값들을 저장하고 그 후 GalC2에 전달
    },[selc1])

    useEffect(()=>{
        console.log("selData", selData);
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