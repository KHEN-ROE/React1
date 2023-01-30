import './App.css';//index.js에서 App임포트하고
import Box from './02/Box' ;

const App = () => {//return은 하나의 태그만 할 수 있다. 여러개 하고 싶으면 부모태그로 감싸면됨
  return (
      <Box />
  );
}

export default App;//export default 해줘야 외부에서 사용가능, 호출과 응답의 반복임
