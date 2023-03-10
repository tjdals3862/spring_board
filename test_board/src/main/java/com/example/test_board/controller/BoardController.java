package com.example.test_board.controller;


import com.example.test_board.domain.Board;
import com.example.test_board.service.BoardServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/board")
@Log4j2
@RequiredArgsConstructor
public class BoardController {

    @Autowired
    BoardServiceImpl boardService;

    @GetMapping("/")
    public String index() {
        log.info("login 페이지");
        return "redirect:/board/list";
    }

    @GetMapping("/list")
    public Map<String, Object> login(Model model) {
        Map<String, Object> result = new HashMap<>();
        log.info("게시물 전체 조회");
        List<Board> board = boardService.boardList();
        result.put("board", board);
        return result;
        //return "board/list";
    }

    @PostMapping("listAdd")
    public void boardAdd(@RequestBody Board board) {
        log.info("게시물 추가");
        log.info(board);
        boardService.boardAdd(board);
    }
}
