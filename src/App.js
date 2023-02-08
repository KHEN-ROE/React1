import './App.css';//index.js에서 App임포트하고
// import Frcst from './04/Frcst';
// import Mydiv from './03/Mydiv';
// import Taccident from './05/Taccident';
// import Box from './02/Box';
// import Example from './03/Example';
// import Taccident1 from './05/Taccident1';
import Gal from './06/Gal' ;
// import Mycom from './07/Mycom';
// import MyForm from './08/MyForm';

const App = () => {//return은 하나의 태그만 할 수 있다. 여러개 하고 싶으면 부모태그로 감싸면됨
  return (
      // <Frcst />
      //  <Mydiv />
      // <Taccident />
      // <Box />
      //  <Example />
      // <Taccident1 />
      <Gal />
      // <Mycom />
      // <MyForm />
  );
}

export default App;//export default 해줘야 외부에서 사용가능, 호출과 응답의 반복임
