const Frcdt = ({dt, setDt}) => {//probs로 받아도 되고 오브젝트로 받아도 됨
    let dtdiv1Tag = [...dt] ;
    console.log(setDt)

    const show = (v) => {
        console.log("show", v)
        setDt(v) ;
    }

    dtdiv1Tag = dtdiv1Tag.map((v)=>
        <div className='dtdiv1' key={v} onClick={() => show(v)}>{v}</div>
    ) ;


    console.log("frcdt ", dtdiv1Tag);
    return(
        <div className="mainbox1">
            {dtdiv1Tag}
        </div>
    );

}

export default Frcdt;