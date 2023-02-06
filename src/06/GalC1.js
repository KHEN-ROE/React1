const GalC1 = ({c1, setSelc1}) => {

    const handleSelect = (item) => {//온클릭했을 때 이 함수 호출
        setSelc1(item)
    }

    const Tag1 = c1.map((item) => <div className="Tag1" key={item} onClick={()=>handleSelect(item)}>{item}</div>)

    return(
        <div className="box1">
            {Tag1}
        </div>
    );
}
export default GalC1;