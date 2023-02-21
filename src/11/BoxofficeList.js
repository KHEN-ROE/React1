import { useState, useEffect } from "react";
import BoxofficDetail from "./BoxofficDetail";

const BoxofficeList = ({targetDt}) => {

    const [mvlist, setMvlist] = useState(); //targetDt가 변하면 mvlist 변화한다.
    const [mvcd, setcd] = useState();
    let [mvlist1, setMvlist1] = useState();

    //영화클릭
    const showDetail = (cd) => {
        console.log("cd", cd)
        setcd(cd); //mvcd에 movieCd 저장. 그걸 BoxofficeDetail에 전달
    }


    //최초 랜더링시
    useEffect(() => {

        const apikey = 'f5eef3421c602c6cb7ea224104795888' ;
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}` ;

        console.log(url)
        fetch(url)//fulfilled 상태가 되면 .then을 쓴다
        .then((resp)=>resp.json())//응답 받아서 json 으로 바꾼다. 이것도 promise
        .then((data)=>{//json으로 바뀌면 또 .then쓰고 
            console.log(data.boxOfficeResult.dailyBoxOfficeList);
            let temp = data.boxOfficeResult.dailyBoxOfficeList;

            temp = temp.map((item) =>
            <div className="row" key={item.movieCd} onClick={() => showDetail(item.movieCd)}>
                <span className="row0"> {item.rank} </span>
                <span className="row1"> {item.movieNm} </span>
                <span className="row2"> {parseInt(item.audiCnt).toLocaleString('ko-KR')} </span>
            </div>
             )
            setMvlist1(temp)
        })
        .catch((err)=> console.log(err))
    }, [targetDt]);

    useEffect(()=>{
        setMvlist();
    },[targetDt]) //날짜 선택할 때마다 변하게 함




    
    return(
        <div className="moviemain">
            <div className="mvlist">
                {targetDt && mvlist} 
               {/* targetDt 없으면 mvlist 못나옴 */}
            </div>

            <div className="moviename">
                <div className="col">
                    <span className="col0" id="colrank">순위</span>
                    <span className="col1" id="colmovieNm">영화명</span>
                    <span className="col2" id="colaudiCnt">관객수</span>
                    
                </div>
                
                {mvlist1}
                
            </div>

            <div className="moviedetail">
               {mvcd && <BoxofficDetail mvcd = {mvcd} />  }
            </div>
        </div>
    );

}
export default BoxofficeList;