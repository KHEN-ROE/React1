const Async = () => {

    const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';

    let p = fetch(url)
    .then((resp)=> resp.json()) //리스폰스가 와야 json 으로 바꾼다
    .then((data) => console.log(data)) //첫번째 .then이 끝나야 두번째 then으로 온다. 이를 promise 체인이라고 함
    .catch((err) => console.log(err))
    









    // const funcA = () => {
    //     console.log("함수 명령");
    // }

    // console.log("명령1") ;
    // console.log("명령2") ;
    // setTimeout(()=> { // 콜백지옥
    //     console.log("타임아웃 명령1") //비동기 통신
    //     setTimeout(()=> {
    //         console.log("타임아웃 명령2") //비동기 통신
    //         setTimeout(()=> {
    //             console.log("타임아웃 명령3") //비동기 통신
    //         } ,500) //0.1초
            
    //     } ,100)
    // } ,1000) //1초

    // console.log("명령3") ;

   

    return(
        <>

        </>
    );
}
export default Async;