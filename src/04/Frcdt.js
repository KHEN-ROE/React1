const Frcdt = ({frcdt, setDt}) => {//probs로 받아도 되고 오브젝트로 받아도 됨
    
    // console.log('probs.frcdt :', frcDt)
    //probs : frcdt (날짜데이터)

    let dtdiv1Tag = [...frcdt] ;//...이 뭐지? 배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용. 그냥 dt해도 값은 똑같네?
    console.log("dtdiv1Tag", dtdiv1Tag);
    // console.log(setDt)

    const show = (v) => {//v를 매개변수로 받아서 setDt함수의 인자로 다시 전달. 날짜를 클릭할 때마다 state가 변화하게됨. 클릭한 날짜 value를 dt에 저장
        // console.log("show", v)
        setDt(v) ;
    }

    
    dtdiv1Tag = dtdiv1Tag.map((v)=>//dtdiv1Tag 배열에 있는 값들을 map함수로 하나씩 다 가져옴.(날짜가 추출됨) 그걸 인자v에 전달했다.
        <div className='dtdiv1' key={v} onClick={() => show(v)}>{v}</div>//클릭하면 show 함수 호출하고 v전달
    ) ;

    // console.log("frcdt ", dtdiv1Tag);
    
    return(
        <div className="mainbox1">
            
             {dtdiv1Tag}
            
        </div>
    );

}

export default Frcdt;