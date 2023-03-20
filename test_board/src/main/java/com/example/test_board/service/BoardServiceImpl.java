package com.example.test_board.service;

import com.example.test_board.domain.Board;
import com.example.test_board.mapper.BoardMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Service
@Log4j2
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardMapper boardMapper;

    @Override
    public List<Board> boardList() {
        List<Board> boardList = null;
        boardList =  boardMapper.boardList();
        log.info("boardList : "+ boardList);
        return boardList;
    }

    @Override
    public List<Board> boardSearchList(Map<String, Object> pMap) {
        List<Board> boardList = null;
        log.info(pMap);
        boardList = boardMapper.boardSearchList(pMap);
        log.info("boardList : "+ boardList);
        return boardList;
    }

    @Override
    public int boardAdd(Board board) {
        int result = 0;
        result = boardMapper.boardAdd(board);
        log.info("boardAdd : " + result);
        return result;
    }

    @Override
    public int boardUpdate(Board board) {
        int result = 0;
        result = boardMapper.boardUpdate(board);
        log.info("boardUpdate : " + result);
        return result;
    }

    @Override
    public int boardDelete(int bno) {
        int result = 0;
        result = boardMapper.boardDelete(bno);
        log.info("boardDelete : " + result);
        return result;
    }
}
