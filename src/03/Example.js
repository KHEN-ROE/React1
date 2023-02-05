import React, { useState, useEffect } from 'react';

const Example = () => {
  
  let [count, setCount] = useState(0);
  
  useEffect(() => {document.title = 'you clicked ${count} times';}, [count]);
 

  return (//onClick에 콜백함수 쓴 이유? 그게 문법인듯 그냥 {함수} 선언할 수도 있는데, 그러면 함수를 위에서 만들어놔야함.
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>
        Click me
      </button>
      <span>{count}</span>
    </div>
  );
};

export default Example;