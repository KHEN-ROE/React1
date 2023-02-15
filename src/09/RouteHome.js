import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //event가 발생할 때, url을 조작할 수 있는 인터페이스. 이벤트 발생시 url 이동 

const RouteHome = () => {

    const navigate = useNavigate();//useNavigate 
    const url = {//오브젝트 만들어 사용하는 방법
        '사과🎈' : '/page2?item=사과🎈' , //쿼리스트링 : 사용자가 입력 데이터를 전달하는 방법 중의 하나, url 주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것을 말한다. ?뒤에가 쿼리스트링
        '바나나🎆' : '/page2?item=바나나🎆',//키가 '바나나'이고 쿼리스트링(url파라미터)이 item?=바나나
        '당근🎇' : '/page2?item=당근🎇'
    }

    // let url = `/page2?item=${item}`;

    const goUrl = (item) => {//파라미터로 item을 받는데 여기서 item이 뭐지? 임의로 작명한건가? 그런듯. 암튼 사과, 바나나, 당근을 받음
      
        navigate(url[item]) ;//useNavigate 훅을 저장하고있는 함수 호출. 매개변수로 url[item]전달. url[item]은 키값에 해당하는 value 가져오라는 의미. item이 사과면 /page2?item=사과🎈 반환 
                             //즉, 클릭이벤트 발생하면 useNavigate훅을 이용해서 url을 조작하겠다. /page2?item=사과🎈 이걸 매개변수로 받아서 url에 넣겠다.
                             //근데, 이걸 RoutePage2에 전달하는 건 언제인가?


        //object 변수 안 썼을 때
        // navigate(url[item]);
        // if(item === '사과🎈') navigate('/page2?item=사과🎈');
        // else if(item === '바나나🎆') navigate('/page2?item=바나나🎆');
        // else if(item === '당근🎇') navigate('/page2?item=당근🎇');
    }


    return(
        <>
            <h1>HOME</h1>

            <h2>파라미터 전송1</h2>
            <ul>
                {/* <Link> 사용하여 클릭하면 page1으로 이동. url파라미터로 사과, 바나나, 당근을 page1에 전달(파라미터명은 item) */}
                <li><Link to='/page1/사과🎈'>사과🎈</Link></li>
                <li><Link to='/page1/바나나🎆'>바나나🎆</Link></li>
                <li><Link to='/page1/당근🎇'>당근🎇</Link></li>
            </ul>

            <h2>[page2 useNavigate사용] 과일 선택하세요</h2>
            {/* 온클릭 이벤트 추가하여 클릭하면 page2로 이동 */}
            <button onClick={() => {goUrl('사과🎈')}}>사과🎈</button>
            {/* 전달 인자가 있을 때는 콜백함수 형태 사용. 클릭하면 goUrl함수 호출하고 파라미터로 사과 전달 */}
            <button onClick={() => {goUrl('바나나🎆')}}>바나나🎆</button>
            <button onClick={() => {goUrl('당근🎇')}}>당근🎇</button>
        </>
    );
}

export default RouteHome;