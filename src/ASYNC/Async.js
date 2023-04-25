import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => { // async는 promise를 반
    setLoading(true); //함수 내에서 'loading' 상태를 'true'로 설정하여 요청이 진행 중임을 나타냄
    const response = await axios.get("https://api.example.com/data"); // API 요청을 하고 응답이 반환될 때까지 기다림. 이 코드에서는 받아올게 없으므로 계속 Loading...
                        //fetch와 axios 차이점 : 1. fetch는 response객체에서 데이터 추출 반면 axios는 데이터에 직접접근 가능
                                              //2. fetch는 오류처리, 헤더 설정에 더 많은 boilerplate요구, axios는 더 간단,직관적
                                              //3. fetch에는 요청 취소에 대한 기본 제공 지원이 포함되어 있지 않지만 Axios는 이 기능을 즉시 제공
                                              // 전반적으로 fetch는 요청 및 응답에 대한 많은 제어가 필요하지 않은 간단한 경우에 좋은 선택
                                              // Axios는 HTTP 처리를 위해 보다 직관적이고 사용자 친화적인 강력한 API를 제공
    setData(response.data); //데이터가 있으면 setData로 상태를 업데이트하고 (data는 응답받은 값)
    setLoading(false); //loading을 다시 false로 설정합니다.
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {loading ? ( // loading이 true면 
        <p>Loading...</p> //Loading...
      ) : ( //false면 (즉 응답을 받으면 혹은 맨 처음에 버튼 누르기 전.)
        <pre>{JSON.stringify(data, null, 2)}</pre> //'JSON.stringify' 메서드를 사용하여 JavaScript 객체를 일부 서식이 적용된 문자열로 변환.
                                                    // 파라미터로 1. 문자열로 변환된 객체 2. 사용되지 않을 경우 대체할 함수 3. 들여쓰기에 사용할 공백의 수
                                                    // pre - 고정 너비 글꼴로 콘텐츠를 렌더링하고 공백과 줄 바꿈을 유지. 
                                                    // JSON.stringify를 사용하고 출력을 pre 태그로 래핑하면 형식이 지정되고 사람이 읽을 수 있는 이해하기 쉬운 방식으로 데이터를 표시 가능
      )}
    </div>
  );
}

export default App;
