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
    
    
    const items = [
        {
        "frcstOneDt":"2023-02-02",//여기서 key는 frcstOneDt이고 value가 날짜인가?
        "frcstTwoDt":"2023-02-03",
        "frcstThreeDt":"2023-02-04",
        "frcstFourDt":"2023-02-05",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "presnatnDt":"2023-01-30"
        }
        ]

    let fcrstDt = ["frcstOneDt", "frcstTwoDt","frcstThreeDt", "frcstFourDt"];
    let fcrstCn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    
    fcrstDt = fcrstDt.map((k) => items[0][k]); //items의 0번째 k값 값
    fcrstCn = fcrstCn.map((k) => items[0][k]);//map함수는 fcrstCn배열 기준으로 작동해서 새로운 배열 생성
    console.log("fcrstDt", fcrstDt);
    console.log("fcrstCn", fcrstCn);

    //두 개를 붙여서 object 만들면?
    // let merge = fcrstDt.map((k, i) =>({[k]:items[0][k], [fcrstCn[i]]:items[0][fcrstCn[i]]}));

    let fcrobj ={};
    for(let [idx, k] of fcrstDt.entries()){//fcrstDt배열에서 키와 값 순회하면서 fcrstdt에 매치되는 fcrstcn의 키값을 fcrobj에 대입한다.
        // console.log('idx=', idx, 'v=', v, 'cnvalue=', fcrstCn[idx])
        fcrobj[k] = fcrstCn[idx];//fcrobj의 value에 fcrstCn의 키값 대입
    }
    // console.log("fcrobj", fcrobj) ;
    

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

      
    let [cn, setCn] = useState(fcrobj["2023-02-02"]) ;
    let [dt, setDt] = useState() ;

    useEffect(()=>{
        // console.log("userEffect", fcrobj[dt]);
        fcrobj[dt] && setCn(fcrobj[dt]);
    }, [dt]);
    //dt가 바뀌면 그때 cn을 바꾸기 위해 useEffect를 쓴다. 

    return ( //속성값을 가지고 있는 사용자 정의 태그를 만들었다. / usestate를 넘겨줘야 하는데, dt에서 state 값 변경?

         <>
           <Frcheader />
           <p>{dt}</p>
           <div className="main">
                <Frcdt dt={fcrstDt} setDt={setDt} />
                {dt && <Frccn dt ={dt} cn={cn} /> }
           </div>
         </>
    ) ;
}

export default Frcst ;