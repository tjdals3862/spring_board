import React from 'react'
import { Link } from 'react-router-dom';

const BoardLists = ({board}) => {
  return (
    <>      
        <tr>
          <td>{board.bno}</td>
          <td><Link to={"/board/boardRead?bno="+board.bno } >{board.title}</Link></td>
          <td>{board.writer}</td>
          <td>{board.regDate}</td>
          <td>{board.hit}</td>
        </tr>
    </>
  )
}

export default BoardLists
