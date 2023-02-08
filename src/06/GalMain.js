import { useEffect, useState, useRef } from "react";
// import GalC1 from "./GalC1";
import GalC2 from "./GalC2";
import Ghead from "./Ghead";

//순서 - GalC1에서 타이틀들을 화면에 출력하고 그 후에 useState를 선언한다. 클릭했을 때 호출되는 함수를 선언한다. 그 함수에서 setSelc1을 호출하여 클릭될 때마다 useState를 변화시키게 하고(클릭한 배열의 속성을 selc1에 저장) 재랜더링되게한다.
//이제 랜더링될 때마다 연산을 수행할 useEffect를 선언한다. useEffect에서는 선택한 selc1이 data1배열의 galTilte과 일치하면 data1배열에서 그 타이틀이 있는 항목을 selData에 저장한다.
//이제 selData에 data1의 상세 내용들이 저장되었고 GalC2에 넘겨준다. GalC2 에서는 selData를 받아서 화면에 출력한다.(map함수를 쓰든, return문 안에 seldata.galTitle 이런식으로 하든)

const GalMain = ({c1, data1}) => {
    
   


    //선택된 대분류
    let [selc1, setSelc1] = useState(); //타이틀들을 눌렀을 때 스테이트 변

    //선택된 대분류에 해당하는 상세내용
    let [selData, setSelData] = useState({});//title들이 클릭됐을 때 구현할 상세내용 변화시킬 useState선언. 근데 왜 오브젝트인가? selData를 전달하는 이유? useEffect에서 연산수행하여 selData에 저장.

    //  const [Tag1, setTag1] = useState();//원래 GalC1에 있던 state 변수. 제목들을 클릭했을 때 변하는 state값. 여기서는 GalC1 안쓴다.

    const [c1tag1, setC1Tag1] = useState([]);//폼에 값이 입력될 때마다 변하는 state 변수. undefined 방지하기 위해 초깃값 []로 줌. 없어도 되긴 하던데. undefined 뜨면 해볼 것

    const txtR = useRef();//form안에 입력된 값을 저장하고 있을 useRef 변수 선언
    
    useEffect(()=>{//처음 랜더링시 검색창에 포커스 가게 함.
        txtR.current.focus();
    },[])
    
    useEffect(()=>{//selc1(타이틀)이 클릭될 때마다 if문 수행. 즉, 타이틀이 클릭될 때마다 data1 배열에 대해서 필터함수 발동.galTitle과 클릭한 Selc1이 일치하면 selData에 클릭한 타이틀 저장 
        if(selc1){
            setSelData(data1.filter((item)=>item.galTitle===selc1)[0])//[0]은 선택한 selc1과 data1배열의 galTitle과 일치하면 data1배열의 0번지에 있는 값(그 title이 있는 요소?)을 setData에 저장
        }//이걸 수행하여 selData에 값들을 저장하고 그 후 GalC2에 전달
    },[selc1])

    const showC1 = () => {
        console.log(txtR.current.value);
        let temp = c1.filter((i) =>i.includes(txtR.current.value))//c1(제목들) 배열을 i가 순회하면서 현재 입력되는 텍스트에 일치하는 value들을 temp에 저장한다.
        setC1Tag1(temp.map((item) => <div className="Tag1" key={item} onClick={()=>handleSelect(item)}>{item}</div>));//temp에 저장된 값들을 item이 순회하면서 c1tag1에 저장한다. c1tag1이 클릭됐을 때 온클릭함수 호출
    }

    const handleSelect = (item) => {//온클릭했을 때 이 함수 호출, setSelc1 발동시키고 매개변수로 타이틀들을 넘겨준다(배열). 이제 타이틀들을 누를 때마다 state가 변화하고 재랜더링된다.
        setSelc1(item)              //누를 때마다 item배열에서 누른 값을 selc1에 대입한다.

    }
    return(
        <div className="content">
            <div className="header">
                <Ghead />
            </div>

            <div className="main">
                <div className="c1tag1">
                    <div className="form1">
                        <form>
                            <input ref={txtR} type="text" name="txt1" onChange={showC1} />
                            {/* text 타입의 폼에 ref변수(txtR)저장. 폼에 값이 입력될 때마다 showC1함수 호출  */}
                            <button className="but1"type="reset">취소</button>
                        </form>
                    </div>

                     <div className="box1">
                        {c1tag1}
                     </div>

                </div>

                <div className="dTag">
                    {selc1 && <GalC2 selData={selData} />}
                </div>            
            </div>

        </div>
    );
}
export default GalMain;