package com.example.test_board.mapper;

import com.example.test_board.domain.Board;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface BoardMapper {
    List<Board> boardList();

    List<Board> boardSearchList(Map<String, Object> pMap);

    int boardAdd(Board board);

    int boardUpdate(Board board);

    int boardDelete(int bno);

}
