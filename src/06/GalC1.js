const GalC1 = ({c1, setSelc1}) => {

    const handleSelect = (item) => {//온클릭했을 때 이 함수 호출, setSelc1 발동시키고 매개변수로 타이틀들을 넘겨준다(배열). 이제 타이틀들을 누를 때마다 state가 변화하고 재랜더링된다.
        setSelc1(item)              //누를 때마다 item배열에서 누른 값을 selc1에 대입한다.
    }

    const Tag1 = c1.map((item) => <div className="Tag1" key={item} onClick={()=>handleSelect(item)}>{item}</div>)//title들을 클릭했을 때 변화를 주겠다. GalC1이 구현되어 있는 컴포넌트는 GalMain이다. 따라서 GalMain에 useState를 선언한다.
                                                                                                            //타이틀들을 클릭했을 때 함수 호출
    return(
        <div className="box1">
            {Tag1}
        </div>
    );
}
export default GalC1;