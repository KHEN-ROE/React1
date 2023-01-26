

const MyClock = () => {
    const d = new Date().toLocaleTimeString();//이렇게 안하고{}안에 바로 넣어도됨
    return (
        <div>현재 시간 : {d}</div>//자바스크립트코드를 {}안에 쓸 수 있다
    ); 

    
}

export default MyClock ;