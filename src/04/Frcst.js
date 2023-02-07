import './Frcst.css' ;
import Frcheader from './Frcheader';
import Frcdt from './Frcdt';
import Frccn from './Frccn';
import {useState, useEffect} from "react";

const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */
    
    
    const items = [//items 객체 배열 선언
        {
        "frcstOneDt":"2023-02-02",//여기서 key는 frcOneDt이고 value가 날짜
        "frcstTwoDt":"2023-02-03",
        "frcstThreeDt":"2023-02-04",
        "frcstFourDt":"2023-02-05",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        // "presnatnDt":"2023-01-30"
        }
        ]

    let frcDt = ["frcstOneDt", "frcstTwoDt","frcstThreeDt", "frcstFourDt"];//날짜 value 갖고있는 키값만 따로 뺴서 배열 만듦
    let frcCn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];//날씨 정보 value 갖고 있는 키값만 따로 빼서 배열 만듦
    
    //map 함수 - key값이 돌면서 items[0]번째의 key값을 찾아서 배열로 만들어줌
    frcDt = frcDt.map((k) => items[0][k]); //items의 0번째 k값 값. map 함수를 이용해서 frcDt배열에 접근하여 값들을 하나씩 다 가져온다. 가져온 값들을 인자 k를 통해서 items (객체)배열에 보낸다. 이제 이 값들이 key가 된다. items 객체배열의 0번지에서 key에 해당하는 value를 추출한다. 그걸 frcDt에 대입한다.  이 배열에서는 객체가 하나만 유일하게 선언됨.
    frcCn = frcCn.map((k) => items[0][k]);//map함수는 fcrCn배열 기준으로 작동해서 새로운 배열 생성
    console.log("items[0]",items[0])
    console.log("frcDt", frcDt);
    console.log("frcCn", frcCn);

    //두 개를 붙여서 object 만들면?
    // let merge = fcrstDt.map((k, i) =>({[k]:items[0][k], [fcrstCn[i]]:items[0][fcrstCn[i]]}));

    let frcobj ={};//오브젝트 선언
    for(let [k, v] of frcDt.entries()){//entries는 배열의 key, value 모두 반환. frcDt배열은 0 : "2023-02-02" 이런식으로 키와 값 둘다 가짐. frcDt배열에서 키와 값 순회하면서 value를 frcobj에 대입
        // console.log('idx=', idx, 'v=', v, 'cnvalue=', fcrstCn[k])
        frcobj[v] = frcCn[k];//여기서 v는 날짜. frcCn의 키에 해당하는 value들을 날짜가 저장돼있는 frcobj 객체에 저장. 그러면 날짜 : 상세내용으로 구성됨.
    }
    console.log("fcrobj", frcobj) ;
    

    // console.log("merge", merge);
    
    // fcrstDT.push(items[0].frcstOneDt);
    // fcrstDT.push(items[0].frcstTwoDt);
    // fcrstDT.push(items[0].frcstThreeDt);
    // fcrstDT.push(items[0].frcstFourDt);
    
    // for(let i=1; i<=3; i++){
    //     fcrstDT.push(items[0][`frcst${i}Dt`]);
    // }

    // console.log(fcrstDT)

    // let frcstCn = [];
    // frcstCn.push(items[0].frcstOneCn);
    // frcstCn.push(items[0].frcstTwoCn);
    // frcstCn.push(items[0].frcstThreeCn);
    // frcstCn.push(items[0].frcstFourCn);
                    
    // console.log(frcstCn);

      
    let [cn, setCn] = useState(frcCn[0]) ;//cn을 업데이트할 state 추가
    let [dt, setDt] = useState() ;//dt를 업데이트할 state 추가

    useEffect(()=>{
        // console.log("userEffect", fcrobj[dt]);
        
        //처음에 dt에 값이 없으므로(클릭을 안했으므로) && 뒤에 실행 안함
        //그러다가 dt 찍으면 [dt]가 바뀌고, dt에 값이 생기므로 && 뒤에 실행 -> setCn으로 cn도 바꿈. 이때 setCn의 매개변수는 frcobj[dt]이다
        //dt 정의되지않으면 setCn에 내용 안나타나게 하기위하여
        frcobj[dt] && setCn(frcobj[dt]);//즉 날짜를 클릭했을 때 cn에다가 클릭한 날짜에 해당하는 상세내용을 저장한다.
    }, [dt]);
    //dt가 바뀌면 그때 cn을 바꾸기 위해 useEffect를 쓴다. 

    return ( //속성값을 가지고 있는 사용자 정의 태그를 만들었다. / usestate를 넘겨줘야 하는데, dt에서 state 값 변경?

         <>
           <Frcheader />
           
           <div className="main">
                <Frcdt frcdt={frcDt} setDt={setDt} />
                {/* 눌렀을 때 show함수 발동. 그때 dt바뀌므로 setDt 인자로 전달 */}
                {dt && <Frccn dt ={dt} cn={cn} /> } 
                {/*날짜를 클릭했을 때 Frccn에 dt와 cn 전달 */}
           </div>
         </>
    ) ;
}

export default Frcst ;