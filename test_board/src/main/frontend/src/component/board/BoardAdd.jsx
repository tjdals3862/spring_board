import React, { useState } from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardAdd = () => {

  const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const changeTitle = (event) => {
		setTitle(event.target.value);
	}

	const changeContent = (event) => {
		setContent(event.target.value);
	}

	const createBbs = async() => {

		const req = {
			title: title, 
      writer: "test",
			content: content,
		}

		await axios.post("http://localhost:3000/board/listAdd", req)
		.then((response) => {			
			console.log(response.data);
      console.log(req)

			alert("새로운 게시글을 성공적으로 등록했습니다 :D");
			navigate(`/board/list/`); 
		})
		.catch((err) => {
			console.log(err);
		});
	}

  return (
    <>
     <Header/>
     <h3 style={{margin: 20}}>Board Add Page</h3>
     
      <FloatingLabel
          controlId="floatingInputGrid"
          label="Title"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" 
            style={{ height: '70px', width:'1800px'}} onChange={changeTitle}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control as="textarea" placeholder="Leave a comment here"
            onChange={changeContent}
            style={{ height: '300px', width:'1800px'}}
          />
        </FloatingLabel>
      <Button variant="primary" onClick={createBbs} style={{margin: 10}}>등록</Button>{' '}
      <Button variant="danger" href="/board/list">취소</Button>{' '}
     <Bottom/> 
    </>
  )
}

export default BoardAdd
