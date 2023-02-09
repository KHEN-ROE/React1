import data from "../db/data.json" //상대경로 - 내 파일 기준으로 파일이 어디 위치하는지. 같은 위치면 ./ 다른 위치(한단계 위)면 ../
import GalC2 from "./GalC2";
import GalCard2 from "./GalCard2";
import { useState, useRef, useEffect } from "react";
import "./Gal.css"
const GalSelect = () => {
    
    //데이터 가져오기
    const items = data.response.body.items.item;
    console.log("items", items);

    const c1 = items.map((obj) => obj.galTitle); //c1 배열 생성
    console.log("c1", c1)
    
    const option = c1.map((k)=><option key={k} value={k}>{k}</option>);
    console.log("option", option)

    //랜더링 제어변수
    const [selItem, setSelItem] = useState();
    //select box 제어
    const selR = useRef();

   
    
    //컴포넌트가 처음 랜더링이 일어났을 때
    useEffect(() => {//처음 랜더링 됐을 때 딱 한번 이 연산 수행
        selR.current.focus();
        console.log(selR.current)//useRef는 current를 달고 다닌다. form안에 있던 래퍼변수가 랜더링됐을 때 화면에 출력     
    }, [])

    // const item ={
    //     WebImageUrl :'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20230206_1095%2Fupload_1675648342737lYmZi.jpg%22&type=nf340_228 ',
    //     Title : '벤츠 GLE SUV',
    //     PhotographyLocation :'부분변경과 동시에 모델 명도 ‘GLE SUV’로 변경',
    //     Month:'202302',
    //     Photographer:'카가이 CAR GUY',
    //     SearchKeyword: '자동차'
    // }

    //반복문 써서 출력
    // const itemTag = items.map((k) => <GalC2 selData={k}/> )

    const handleSel = (e) => {
        e.preventDefault();
        if(selR.current.value==="") return; //공백 선택해도 에러 안나도록 함
        console.log("onchange", selR.current.value)
        let temp;
        setSelItem(temp = items.filter((item) => item.galTitle===selR.current.value)[0]);//select 한 것과 items 배열의 타이틀이 일치할 때 해당하는 배열의 항목을 가져와서 temp에 넣는다. 그리고 그걸 selItem에 저장한다. 그리고 그걸 GalC2에 전달한다
        console.log("onchange", temp) 
    }

    return(
        <>
            {/* <GalCard2 selData={item} /> */}
            {/* {itemTag} */}
            <form>
                <select ref={selR} name="sel1" onChange={handleSel}>
                    <option value="">항목을 선택하세요.</option>
                    {/* 초깃값 공백으로 줘서 맨 처음에 선택안되는 것 방지. 이렇게 해도 되고 그냥 onClick={handleSel} 추가해도 되고 */}
                    {option}
                </select>
            </form>
            {selItem && <GalC2 selData={selItem} />}
            {/* 속성에다가 오브젝트 넣어서 보내준다. 받는 곳에서는 {}안에 값이 아닌 이름(selData)로 받는다 */}
           
        </>
    );
}
export default GalSelect;