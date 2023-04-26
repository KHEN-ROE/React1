import React, { useState, useEffect } from 'react';

/* 
순서 - 0. 처음에 랜더링될 때 DB에 있는 정보를 화면에 출력하도록 만들었다.
       1. 새로운 TODO를 추가할 때 -  웹페이지에서 요청하면 DB에 먼저 데이터가 저장된다.
       2. 저장된 데이터를 다시 웹페이지에 뿌려준다.
*/

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  useEffect(() => {
    fetch('http://localhost:8080/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  function handleSubmit(e) {
    console.log("newtodo", newTodo)
    e.preventDefault();
    fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newTodo })
    })
      .then(response => response.json())
      .then(data => {
        setTodos([...todos, data]); //기존 데이터 유지하면서 새 데이터 저장
        setNewTodo('');
      });
  }

  // 엑시오스 사용한 코드
  //   import axios from 'axios';

  // function handleSubmit(e) {
  //   console.log("newtodo", newTodo)
  //   e.preventDefault();
  //   axios.post('http://localhost:8080/api/todos', {
  //     text: newTodo
  //   })
  //     .then(response => {
  //       setTodos([...todos, response.data]); 
  //       setNewTodo('');
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  const deleteTodo = (id) => {
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        console.log("response", response);
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
      });
  }

  // const deleteTodo = (id) => {
  //   fetch(`http://localhost:8080/api/todos/${id}`, {
  //     method: 'DELETE'
  //   })
  //     .then(response => response.json()) // 서버로부터 받은 제이슨형식의 데이터를 자.스 객체로 파싱
  // 제이슨으로 파싱 안 하면 리스폰스 객체는 문자열 형식
  // fetch 함수가 응답 데이터를 받아와서 JavaScript 객체로 자동 변환해주기 때문에,
  // 따로 response.json()과 같은 변환 작업을 하지 않아도 됨.
  // 왜냐하면, delete 요청을 보내서 db에 삭제하는 것과 웹페이지에서 삭제를 하는 것은 별개의 작업임.
  // 데이터를 응답 받아서 웹페이지에서 처리하는 것이 아님.
  // 반면 POST 방식은, 서버에서 새로운 데이터를 생성하고 생성된 데이터를 다시 클라이언트에게 반환해줌. 
  // 그렇기 때문에 클라이언트에서는 생성된 데이터를 받아와야 함.
  // 그래서 위에 create하는 함수에서는 fetch 함수의 응답을 JSON 형식으로 파싱하여 생성된 데이터를 가져오고, 
  // 그 데이터를 기존의 todos 배열에 추가한 후 상태를 업데이트하는 작업을 수행함.
  //     .then(() => {
  //       const updatedTodos = todos.filter(todo => todo.id !== id);
  //       setTodos(updatedTodos);
  //     });
  // }

  const editTodo = (id) => {
    console.log("id to edit:",id)
    const updatedText = prompt("Enter updated text:");
    if (updatedText) {
      fetch(`http://localhost:8080/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: updatedText })
      })
        .then(response => response.json())
        .then(data => {
          const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
              return { ...todo, text: data.text };
            } else {
              return todo;
            }
          });
          setTodos(updatedTodos);
        });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}
            <button type='submit' onClick={() => editTodo(todo.id)}>edit</button>
            <button type='submit' onClick={() => deleteTodo(todo.id)} >delete</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
