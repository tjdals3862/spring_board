import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const BoardPagination = () => {
  return (
    <div>
      <Pagination fixed="bottom" className="justify-content-center">{items}</Pagination>
    </div>
  )
}

export default BoardPagination
