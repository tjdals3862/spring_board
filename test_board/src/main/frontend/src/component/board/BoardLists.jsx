import React from 'react'
import { useNavigate } from 'react-router-dom';

const BoardLists = (board) => {

  const navigate = useNavigate();

  const onClickdata = () => {
    navigate(`/board/boardRead?bno=${board.board.bno}`);
    
  };

  console.log(board)

  return (
    <>      
        <tr>
          <td>{board.board.bno}</td>
          <td onClick={onClickdata}>{board.board.title}</td>
          <td>{board.board.writer}</td>
          <td>{board.board.regdate}</td>
          <td>{board.board.hit}</td>
        </tr>
    </>
  )
}

export default BoardLists
