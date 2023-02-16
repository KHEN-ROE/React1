import { useState,useEffect } from "react";
import Wheader from "./Wheader";
import keys from "../db/item.json"
import weather from "../db/weather.json";

const W2 = () => {

    let [item1, setItem1] = useState(); //맨처음 랜더링될 때 
    let [item2, setItem2] = useState(); // 클릭했을 때 랜더링 되도록
    


    const item = weather.response.body.items.item;
    console.log(item)
   

    const showD = () => { //이제 누를 때마다 state가 변경되나?
        setItem1(item);
    }
    
    // useEffect(() => {
        
    // },[item1])
  

    // useEffect(()=> {
    //     let temp = 
    // },[item1])
   

    

    
    return(
        <div className="content">
            <div>
            <Wheader title={'일기예보-중기'} />
            </div>

            <div className="bts">
                <span><button className="bt" onClick={showD}>3일 후 날씨</button></span>
                <span><button className="bt">4일 후 날씨</button></span>
                <span><button className="bt">5일 후 날씨</button></span>
                <span><button className="bt">6일 후 날씨</button></span>
            </div>

            <div>
                {item2}
            </div>

        </div>

    );
}
export default W2;