
import { useParams } from "react-router-dom";//main에서 보낸 url파라미터(item)을 받기 위해 useParams 훅 사용

const RoutePage1 = () => {
    const item = useParams().item;//useParams()훅을 이용해 url파라미터 item을 받아서 그걸 item에 저장
    console.log("page1 item", item);

    const fruits = ['사과🎈', '바나나🎆'];//배열 선언
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다." ;//fruits 배열이 url파라미터 item을 포함하는지 여부 확인해서 tag에 저장(삼항연산자)
    
    // if (fruits.includes(item)) tag = "과일"; (if-else문으로 작성해도 됨)
    // else tag = "과일이 아닙니다";


    return(
        <>
            <h1>Page1</h1>
            <p>{`${item}는 ${tag}`}</p>
        </>
    );
}

export default RoutePage1;