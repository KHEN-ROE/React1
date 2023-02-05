import { useState } from "react";

const Boxmain = () => {
    const mvlist = //mvlist라는 배열 선언
    [{"rnum":"1","rank":"1","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20190808","movieNm":"교섭","openDt":"2023-01-18","salesAmt":"355906586","salesShare":"18.8","salesInten":"-147956429","salesChange":"-29.4","salesAcc":"12600296336","audiCnt":"36622","audiInten":"-23326","audiChange":"-38.9","audiAcc":"1234442","scrnCnt":"945","showCnt":"3700"},
    {"rnum":"2","rank":"2","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20228555","movieNm":"더 퍼스트 슬램덩크","openDt":"2023-01-04","salesAmt":"305669122","salesShare":"16.1","salesInten":"-106843585","salesChange":"-25.9","salesAcc":"17301443212","audiCnt":"30127","audiInten":"-19053","audiChange":"-38.7","audiAcc":"1673520","scrnCnt":"794","showCnt":"2474"},
    {"rnum":"3","rank":"3","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20225061","movieNm":"아바타: 물의 길","openDt":"2022-12-14","salesAmt":"395604792","salesShare":"20.9","salesInten":"-158772970","salesChange":"-28.6","salesAcc":"128917076050","audiCnt":"28262","audiInten":"-14218","audiChange":"-33.5","audiAcc":"10171549","scrnCnt":"661","showCnt":"1588"},
    {"rnum":"4","rank":"4","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20229551","movieNm":"상견니","openDt":"2023-01-25","salesAmt":"196995521","salesShare":"10.4","salesInten":"-179431122","salesChange":"-47.7","salesAcc":"573422164","audiCnt":"19635","audiInten":"-25089","audiChange":"-56.1","audiAcc":"64359","scrnCnt":"675","showCnt":"2086"},
    {"rnum":"5","rank":"5","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20229205","movieNm":"메간","openDt":"2023-01-25","salesAmt":"170788579","salesShare":"9.0","salesInten":"-46345424","salesChange":"-21.3","salesAcc":"390717582","audiCnt":"16955","audiInten":"-8684","audiChange":"-33.9","audiAcc":"42871","scrnCnt":"547","showCnt":"1669"},
    {"rnum":"6","rank":"6","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20214823","movieNm":"유령","openDt":"2023-01-18","salesAmt":"135407499","salesShare":"7.1","salesInten":"-41938529","salesChange":"-23.6","salesAcc":"4601480264","audiCnt":"13777","audiInten":"-7684","audiChange":"-35.8","audiAcc":"449528","scrnCnt":"724","showCnt":"1812"},
    {"rnum":"7","rank":"7","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20196478","movieNm":"영웅","openDt":"2022-12-21","salesAmt":"107470059","salesShare":"5.7","salesInten":"-32133825","salesChange":"-23","salesAcc":"29499625093","audiCnt":"11213","audiInten":"-5659","audiChange":"-33.5","audiAcc":"2987866","scrnCnt":"601","showCnt":"1118"},
    {"rnum":"8","rank":"8","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20224109","movieNm":"장화신은 고양이: 끝내주는 모험","openDt":"2023-01-04","salesAmt":"49019382","salesShare":"2.6","salesInten":"-78802","salesChange":"-0.2","salesAcc":"6738436897","audiCnt":"6082","audiInten":"630","audiChange":"11.6","audiAcc":"711504","scrnCnt":"332","showCnt":"409"},
    {"rnum":"9","rank":"9","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20228313","movieNm":"오늘 밤, 세계에서 이 사랑이 사라진다 해도","openDt":"2022-11-30","salesAmt":"49429844","salesShare":"2.6","salesInten":"-16882910","salesChange":"-25.5","salesAcc":"10112965111","audiCnt":"4868","audiInten":"-2184","audiChange":"-31","audiAcc":"980655","scrnCnt":"241","showCnt":"355"},
    {"rnum":"10","rank":"10","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20229518","movieNm":"천룡팔부: 교봉전","openDt":"2023-01-25","salesAmt":"15848197","salesShare":"0.8","salesInten":"-3804460","salesChange":"-19.4","salesAcc":"48516954","audiCnt":"1754","audiInten":"-482","audiChange":"-21.6","audiAcc":"5202","scrnCnt":"259","showCnt":"393"}
]
    let [dspmv, setDspmv] = useState({}) ;//dspmv를 변화시키기 위해 useState 선언하고 초기값으로 오브젝트 할당.개봉일을 변화시키는 함수

    const handleDivClick = (selmv) => {//onClick시 호출되는 함수 생성. 받는 매개변수로 selmv 임의 작명
        setDspmv({...selmv});//selmv 배열을 펼쳐서 오브젝트로 만듦, dspmv에 오브젝트를 저장해서 클릭할 때마다 변화시킬 수 있는 조건 만듦
        console.log('dspmv' , dspmv);
    }    

    let divTags = [] ; //빈 배열을 하나 생성
    for(let mv of mvlist){ //배열에다가 집어넣고 반복문 이용해서 출력. mv라는 임의의 인자를 가지고 키에 접근한다. 배열을 순회하면서 value 가져온다
        // console.log("mvs"+mv.rank, mv.movieNm, mv.salesAmt, mv.rankInten);//mv(key)가 rank순으로 영화명, 판매량, 순위변동률에 해당하는 value를 가져온다
        let inten = '-';//변동률이 없으면 - 출력하고
        if(mv.rankInten >0) {//순위 변동률이 0보다 크면 다음의 아이콘 삽입
            inten = <span className="spup"> {'▲' + mv.rankInten}</span>;
        }
        else if(mv.rankInten<0) {//순위 변동률이 0보다 작으면 다음의 아이콘 삽입
            inten = <span className="spdown">{'▼' + -(mv.rankInten)}</span>;
        }
                                                                    //여러개를 만들때 오류 뜨면 key값 입력. key값으로 구분한다.
        divTags.push(//divTage배열에 삽입                            //인수를 전달시키고 싶으면 콜백함수로 전달
                                                                    //클릭하면 handleDivClick 함수 호출하고 인자mv를 파라미터로 전달. mv는 mvlist배열을 순회하면서 키값에 접근해서 얻은 value값들이다
                                                                    //div로 섹션을 나눠서 본문출력
                                                                    //mvlist 배열에서 인자mv를 통해 키에 접근하고. 각 키값이 가지고 있는 value를 가져온다.
        <div className="rowDiv" key={mv.movieCd} onClick={() => handleDivClick(mv)}>
            <span className="col" id="colrank">{mv.rank}</span>
            <span className="col" id="colmovieNm">{mv.movieNm}</span>
            <span className="col" id="colsalesAmt">{parseInt(mv.salesAmt).toLocaleString('ko-KR')}</span>
            <span className="col" id="colrankInten">{inten}</span>
        </div>)//배열에다 집어넣는 메소드는 push 
    }

    return(// 화면에 표시는 건  return문 안에 구현. 여기서는 3개의 섹션으로 나눔
           // 마지막 섹션에서, divTags를 누르면 dspmv에 저장되어 있는 오브젝트 중에서 opendt에 접근하여 반환하도록 함.
        <div className="content">
            <div className="rowDiv">
                <span className="col" id="colrank">순위</span>
                <span className="col" id="colmovieNm">영화명</span>
                <span className="col" id="colsalesAmt">매출액</span>
                <span className="col" id="colrankInten">증감률</span>
            </div>
            {divTags}
            <div className="rowDay">
               [{dspmv.movieNm}] 개봉일 : {dspmv.openDt} 
            </div>
        </div>
    );
}

export default Boxmain;