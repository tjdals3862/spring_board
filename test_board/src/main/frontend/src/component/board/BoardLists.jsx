import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const BoardLists = ({board}) => {

  return (
    <>      
        <tr>
          <td>{board.bno}</td>
          <td><Link to={"/board/boardRead/"+board.bno } >{board.title}</Link></td>
          <td>{board.writer}</td>
          <td>{board.regdate}</td>
          <td>{board.hit}</td>
        </tr>
    </>
  )
}

export default BoardLists
