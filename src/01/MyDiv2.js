

const MyDiv2 = () => {//컴포넌트 이름은 대문자로 시작, 화살표함수 써도되고 딴거 써도되고
  const myName = '노우권' ;
  const myGit = 'https://github.com/KHEN-ROE/';
  console.log(myName);
  return (//반드시 리턴이 있어야한다. 앞에 코드(본문)가 있던지 없던지. 리턴안에는 jsx(태그와 자.스 문법 섞어놓은것)가 들어가야한다. 근데 한 개의 태그만 들어가야함. div태그 안에 자식 태그가 여러개 드가는 건 상관없다
    <div>
        <p id="p1">{myName}</p>
        <p>GitHub : <a href={myGit}>{myGit}</a></p>
    </div>
    
  );
}

export default MyDiv2;//export default 해줘야 외부에서 사용가능
