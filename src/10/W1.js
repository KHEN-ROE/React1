import Wheader from "./Wheader";
import keys from "../db/item.json"
import weather2 from "../db/weather2.json";

//데이터가 안 바뀔 땐 state, useEffect 쓸 필요 없다. 하지만 패치해서 데이터 가져올 땐 써야함
import { useState, useEffect } from "react";


const W1 = () => {
    //state 변수
    const [items, setItems] = useState(); // 파라미터 아무것도 없으면 콘솔에 undefined 나옴. falsy문으로 해결.  ~ && ~ 값이 없으면 안찍는다
    const [itemTag, setItemTag] = useState();

    
    
    //useEffect
    //랜더링이 될 때마다 실행. 여러개의 스테이트 변수 중 어떤 변수가 변해도 실행
    // useEffect(() => {});

    //맨처음 컴포넌트 랜더링시 실행
    useEffect(() => {
        setItems(weather2.response.body.items.item);
    }, []);

    //특정 state변수 변경 시 실행
    useEffect(() => {
        if(!items) return ;
        console.log("items", items)
        let temp;
        temp = items.map((i, n) =>
            <div className="w1div" key={"w1div"+n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>
         )
        setItemTag(temp)
    },[items]);


    // let items = weather2.response.body.items.item ;

    // console.log('weather2', weather2)
    // console.log('item',item)
    // console.log('items',items)
    
    // let w1 = items.map((i)=>{//함수형으로 쓰면 여러줄 쓸 수 있다 대신 ruturn해야함
    //     let temp = [];
    //     temp.push(item[i.category][0]) ;//item 오브젝트 중에서 i.category에 해당하는 값을 가져오는데, item의 0번지에 있는걸 가져온다. weather2의 item에서 category 키의 value를 순서대로 가져온다(PTY부터). 이제 그 value들이 다시 key가 된다. 이 key의 value중, 0번지에 있는 거만 가져온다. 
    //     temp.push(i.obsrValue) ;//수치(숫자)
    //     temp.push(item[i.category][1]) ;//1번지 가져와야 단위가 들어온다
    //     //push3번 1세트로 총 8개의 배열 생성

    //     return temp; 
    // })
    // console.log("w1", w1)

    return(
        <div className="content">
            <Wheader title={'일기예보-단기'} />
                
                   {items && itemTag}

                    {/* {w1} */}

           
        </div>
    );
}
export default W1;