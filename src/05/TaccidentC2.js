const TaccidentC2 = ({c2}) => {
    let tc2Tag = [...c2]; //전개 연산자 사실상 불필요 한 것 같은데... 그냥 c2해도 값 동일 
    tc2Tag = tc2Tag.map((v) =><div className="tc2Tag" key={v}>{v[1]}</div> ) //왜 v[1]? 1번지 값이 얻고자 하는 정보다. 차대차:정면충돌 여기서 오른쪽만 필요함
    
    return(
        <div className="tc2">
            
                <h2>중분류</h2>
            
            <div className="box2">
                {tc2Tag}
            </div>
           
        </div>  
     
    );
}

export default TaccidentC2;