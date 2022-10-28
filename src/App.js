/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [ title, setTitle] = useState(['남자코트 추천', '강남 우동맛집','파이썬독학']);
  let [ like, setLike] = useState(0);
  let [ modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy)
      }}>제목 정렬</button>
      <div className="list">
        <h4> { title[0] } <span onClick={() => { setLike(like + 1)}}>👍 {like}</span></h4>
        <p>2월 17일 발행</p>
        <button onClick={() => {
          let copy = [...title];
          copy[0] = '여자코트 추천';
          setTitle(copy)
        }}>수정</button>
      </div>

      <div className="list">
        <h4> { title[1] } <span>👍</span></h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={() => {setModal(!modal)}}> { title[2] } <span>👍</span></h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>글제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
