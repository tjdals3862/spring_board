package com.example.test_board.mapper;

import com.example.test_board.domain.BoardList;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface BoardMapper {

    List<BoardList> boardList();
}
