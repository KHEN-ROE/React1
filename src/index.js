import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js, App.css 임포트


const root = ReactDOM.createRoot(document.getElementById('root'));//가상돔 생성 사용자 태그. 밑에 <App > 은 사용자 태그. 이걸 만드는게 리액트 
/*
root.render(//App에 글자 쓸게 없으므로 /넣어서 끝냄
    <App /> 
);
*/
//실시간으로 흘러가는 시계 만들기
setInterval(() => {root.render(//App에 글자 쓸게 없으므로 /넣어서 끝냄
<App /> 
);}, 1000);
