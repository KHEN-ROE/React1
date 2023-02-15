import { useLocation } from "react-router-dom"; //url 주소로 전달되는 값은 useLocation훅을 이용해 전달된 쿼리스트링을 받음. 이걸 쓰면 Route 컴포넌트에서 따로 설정 안해도 됨    
import qs from "query-string";

const RoutePage2 = () => {
    
    // location = location.split('?')[1] ;
    
    // else tag = "과일이 아닙니다";
    // if (fruits.includes(item)) tag = "과일";
    
    let location = useLocation().search;//useNavigate 훅으로 조작한 url을 useLocation().search를 이용해서 가져온건가? RouteHome에서 보낸 적 없는 것 같은데
    console.log("location", location); // useNavigate를 이용해 url을 /page2?item=사과🎈 이런 식으로 조작했다. useLocation().search를 이용해 쿼리스트링을 받았다.
                                       //쿼리스트링은 ? 뒤에 있는 내용이다. 따라서 콘솔에는 ?item=~~~~ 이렇게 나온다
    
    let item = qs.parse(location).item ; //location에 저장된 ?item=~~~~이런 내용을 클릭했을 때 key값(사과,바나나,당근)으로 qs를 이용해 바꿔준다?
    console.log("item", item);
    
    
    const fruits = ['사과🎈', '바나나🎆'];
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다." ;

    return(
        <>
            <h1>Page2</h1>
            <p>{`${item}는 ${tag}`}</p>
        </>
    );
}

export default RoutePage2;