import React from 'react'
import { Link } from 'react-router-dom';

const BoardLists = ({board}) => {
  console.log(board)
  return (
    <>      
        <tr>
          <td>{board.bno}</td>
          <td><Link to={{pathname:"/board/boardRead?bno="+board.bno,
        board}}>{board.title}</Link></td>
          <td>{board.writer}</td>
          <td>{board.regDate}</td>
          <td>{board.hit}</td>
        </tr>
    </>
  )
}

export default BoardLists
