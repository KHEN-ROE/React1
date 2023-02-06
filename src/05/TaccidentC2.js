const TaccidentC2 = ({selc2A, selc2, setSelc2}) => {

    //중분류가 클릭됐을 떄
    const handleSelect =(v) => {
        console.log(v)
        setSelc2(v[1])
    }

    //중분류 화면 표시 태그
    
    const Tag2 = selc2A.map((v)=><div className={v[1]=== selc2 ? "TagSel":"Tag2"} key={[...v]} onClick={()=>handleSelect(v)}>{v[1]}</div>)

    
    return(
        <div className="tc2">
            
                <h2>중분류</h2>
            
            <div className="box2">
                {Tag2}
            </div>
           
        </div>  
     
    );
}

export default TaccidentC2;