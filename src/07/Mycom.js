import { useState, useEffect, useRef } from "react";

const Mycom = () =>{
    
   

    const [tag, setTag] = useState()
    const txt1R = useRef();//래퍼 변수로 선언
    const txt2R = useRef();

    //컴포넌트가 처음 랜더링 됐을 때
    useEffect(()=>{
        txt1R.current.focus();//최초 커서 위치 지정
    },[]);
    
    const checkForm = (e) =>{
        e.preventDefault();//폼에있는 이벤트 처리할 때 이벤트 물리는 경우 방지 위해 선언

        setTag(`입력된 아이디는 ${txt1R.current.value}이고 비밀번호는 ${txt2R.current.value}입니다.`)
    }

    return(
        <>  
            <form name="myForm">
                <input ref={txt1R} type="text" name="txt1" placeholder="아이디입력" />
                <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호 입력" />
                <input type="button" value="확인" onClick={checkForm}/> 
                <input type="reset" value="취소" /> 
                {/* reset 발동하려면 form안에 넣어야함 */}
                <div>
                    {tag}
                </div>
            
            </form>     
        </>
    );
}
export default Mycom;