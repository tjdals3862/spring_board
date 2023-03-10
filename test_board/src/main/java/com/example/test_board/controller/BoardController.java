package com.example.test_board.controller;


import com.example.test_board.domain.Member;
import com.example.test_board.mapper.MapperTest;
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
    private MapperTest mapper;

    @GetMapping("/")
    public String index() {
        log.info("login 페이지");
        return "redirect:/board/login";
    }

    @GetMapping("/member")
    public String login(Model model) {
        return "board/member";
    }

    @GetMapping("/mybatisAnnotation")
    public String memberList(Model model){
        log.info(mapper.getList());
        List<Member> list = mapper.getList();
        model.addAttribute("name" ,list.get(0).getId());

        return "board/member";
        //return mapper.getList();
    }

    @GetMapping("/mybatisXml")
    public String memberList2(Model model){
        log.info(mapper.getXmlList());
        List<Member> list = mapper.getXmlList();
        model.addAttribute("id" ,list.get(0).getId());
        model.addAttribute("name" ,list.get(0).getName());
        model.addAttribute("email" ,list.get(0).getEmail());
        model.addAttribute("password" ,list.get(0).getPassword());
        return "board/member";
    }

}
