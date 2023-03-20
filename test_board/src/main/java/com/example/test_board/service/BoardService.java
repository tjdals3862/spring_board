package com.example.test_board.service;

import com.example.test_board.domain.Board;

import java.util.List;
import java.util.Map;

public interface BoardService {

    // 게시판 전체 조회
     List<Board> boardList();

     // 게시판 검색
    List<Board> boardSearchList(Map<String, Object> pMap);

    // 게시판 추가
    int boardAdd(Board board);

    // 게시판 수정
    int boardUpdate(Board board);

    // 게시판 삭제
    int boardDelete(int bno);

}
