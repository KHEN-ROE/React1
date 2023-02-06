const TaccidentC1 = ({c1, selc1, setSelc1}) => {

        //대분류가 클릭됐을 때
        const handleSelect =(v) => {//온클릭을 하면 이 함수 호출한다.
            setSelc1(v)//setSelc1 함수를 호출하고 v를 매개변수로 전달. v는 대분류 값들이다.
        }

        //대분류 화면 표시 태그   
        const Tag1 = c1.map((v) => <div className={v=== selc1 ? "TagSel":"Tag1"} key={v} onClick={()=>handleSelect(v)} >{v}</div>)
    
    return(
        <div className="tc1">
                <h2>대분류</h2>
            
            <div className="box1">
                {Tag1}
            </div> 
        </div>
            
    );
}

export default TaccidentC1;