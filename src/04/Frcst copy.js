import './Frcst.css' ;
import {useState} from "react";

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
    const [info, setInfo] = useState() ;
    
    const items = [
        {
        "frcstOneDt":"2023-02-02",
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
        let item = items[0] ;
        console.log(item);//오브젝트만 가져옴
        
        const showInfo = (seldt) => {
            let infoArry=[];
            // console.log(seldt);
            switch (seldt) {
                case 1: infoArry = item.frcstOneCn.split(',') ; break;
                case 2: infoArry = item.frcstTwoCn.split(',') ; break;
                case 3: infoArry = item.frcstThreeCn.split(',') ; break;
                case 4: infoArry = item.frcstFourCn.split(',') ; break;
                
            }
            // infoArry = infoArry.map((v) => <li key={`${v}-${seldt}`} className='lired'>{v}</li>) ;//배열로 만들어서 ','기준으로 자르고 <li>로 정렬. //오류나면 키값 만들면 됨 {}자바스크립트 수식을 쓰고, ``은 자바스크립트 수식으로 문자열을 만듦. 여기서 -는 minus연산이 아님. 이렇게 써도 되고{v+'-'+seldt} 걍{v}이렇게 키값 설정해도됨
            infoArry = infoArry.map((v) => 
             
            <li key={v + '-' + seldt}><span>{v.split(':')[0]}</span>({v.includes('높음') ?<span className='lired'>{v.split(':')[1]}</span> :<span>{v.split(':')[1]}</span> })
            </li>
            );
            
            console.log(infoArry)
            setInfo(infoArry);
          
        }

       

    return (
         <>
            <div className="header">
                <h1>미세먼지 예보</h1>
            </div>
            <div className="main">
                <div className="mainbox1">
                    <div className='dtdiv1' onClick={() => showInfo(1)}>{item.frcstOneDt}</div>
                    <div className='dtdiv1' onClick={() => showInfo(2)}>{item.frcstTwoDt}</div>
                    <div className='dtdiv1' onClick={() => showInfo(3)}>{item.frcstThreeDt}</div>
                    <div className='dtdiv1' onClick={() => showInfo(4)}>{item.frcstFourDt}</div>
                    </div>
                <div className="mainbox2">
                    <div className='detail'>
                        <ul>
                        {info}
                        </ul>
                    </div>
                </div>
            </div>
         </>
    ) ;
}

export default Frcst ;