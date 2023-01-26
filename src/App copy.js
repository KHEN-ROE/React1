import logo from './logo.svg';
import './App.css';//index.js에서 App임포트하고

const App = () => {//컴포넌트 이름은 대문자로 시작, 화살표함수 써도되고 딴거 써도되고
  console.log('App.js') ;
  return (//반드시 리턴이 있어야한다. 앞에 코드가 있던지 없던지. 밑에 jsx에서는 className으로 써야한다
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;//export default 해줘야 외부에서 사용가능
