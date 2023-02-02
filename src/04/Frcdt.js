const Frcdt = ({dt, setDt}) => {//probs로 받아도 되고 오브젝트로 받아도 됨
    
    console.log('probs.frcdt :', frcdt)
    //probs : frcdt (날짜데이터)

    let dtdiv1Tag = [...dt] ;//...이 뭐지? 배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용
    // console.log(setDt)

    const show = (v) => {
        // console.log("show", v)
        setDt(v) ;
    }

    
    dtdiv1Tag = dtdiv1Tag.map((v)=>
        <div className='dtdiv1' key={v} onClick={() => show(v)}>{v}</div>
    ) ;

    // console.log("frcdt ", dtdiv1Tag);
    
    return(
        <div className="mainbox1">
            {dtdiv1Tag}
        </div>
    );

}

export default Frcdt;