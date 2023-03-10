package com.example.test_board.controller;


import com.example.test_board.domain.Member;
import com.example.test_board.mapper.BoardMapper;
import com.example.test_board.mapper.MapperTest;
import com.example.test_board.service.BoardServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
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

    @GetMapping("/board")
    public String login(Model model) {
        log.info("게시물 전체 조회");
        boardService.boardList();


        return "board/list";
    }



}
