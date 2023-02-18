import { useState,useEffect } from "react";
import Wheader from "./Wheader";
import weather from "../db/weather.json";


const W2 = () => {

    let [item1, setItem1] = useState(); //맨처음 랜더링될 때
    let [item3, setItem3] = useState();

    let [day, setDay] = useState(false);
    
    
    let showD = () => {
        setDay(true);
    }

   

    //최초 랜더링시
    useEffect(() => {
        setItem1(weather.response.body.items.item);
    },[])

    useEffect(()=>{
        console.log("day", day);
        let temp = item1 && item1.map((k, i)=>{
            return (
                <div>
                    <div className="day3" key={i}>
                        <li className="l3">3일 후</li>
                        <li className="l3">오전 강수량</li>
                        <li className="l3">{k.rnSt3Am}%</li>
                    </div>
                    <div className="day3" >
                        <li className="l3">3일 후</li>
                        <li className="l3">오후 강수량</li>
                        <li className="l3">{k.rnSt3Pm}%</li>
                    </div>
                    <div className="day3">
                        <li className="l3">3일 후</li>
                        <li className="l3">오전 날씨예보</li>
                        <li className="l3">{k.wf3Am}</li>
                    </div>
                    <div className="day3">
                        <li className="l3">3일 후</li>
                        <li className="l3">오후 날씨예보</li>
                        <li className="l3">{k.wf3Pm}</li>
                    </div>
                </div>
            );
        })
        setItem3(temp);
    },[day])

    
    
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
                {item3}
            </div>

        </div>

    );
}
export default W2;