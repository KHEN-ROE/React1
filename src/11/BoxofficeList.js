import { useState, useEffect } from "react";

const BoxofficeList = ({targetDt}) => {

    const [mvlist, setMvlist] = useState(); //targetDt가 변하면 mvlist 변화한다.

    //최초 랜더링시
    useEffect(() => {

        const apikey = 'f5eef3421c602c6cb7ea224104795888' ;
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}` ;

        console.log(url)
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data.boxOfficeResult.dailyBoxOfficeList);
        })
        .catch((err)=> console.log(err))
    }, []);

    useEffect(()=>{
        setMvlist()
    },[targetDt]) //날짜 선택할 때마다 변하게 함




    
    return(
        <div>
            <div>
                {targetDt && mvlist} 
               {/* targetDt 없으면 mvlist 못나옴 */}
            </div>
            <div>
                상세
            </div>
        </div>
    );

}
export default BoxofficeList;