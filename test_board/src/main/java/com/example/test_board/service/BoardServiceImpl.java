package com.example.test_board.service;

import com.example.test_board.domain.BoardList;
import com.example.test_board.domain.BoardResult;
import com.example.test_board.mapper.BoardMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardMapper boardMapper;

    @Override
    public List<BoardList> boardList() {
        List<BoardList> boardList = null;
        boardList =  boardMapper.boardList();
        log.info("boardList : "+ boardList);
        return boardList;
    }
}
