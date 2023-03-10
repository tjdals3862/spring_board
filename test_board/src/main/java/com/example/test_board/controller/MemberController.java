package com.example.test_board.controller;

import com.example.test_board.domain.Member;
import com.example.test_board.service.MemberServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/member")
@Log4j2
public class MemberController {

    @Autowired
    MemberServiceImpl memberService;

    @GetMapping("/")
    public String index() {
        log.info("로그인 페이지");
        return "redirect:/member/LoginForm";
    }

    @GetMapping("/LoginForm")
    public String LoginForm() {
        log.info("로그인 페이지");

        return "/member/LoginForm";
    }

    @PostMapping("/Login")
    public String LoginSuccess() {
        log.info("로그인 진행");
        Member member = new Member();

        return "redirect:/board/member";
    }

    @GetMapping("/Register")
    public String Register() {
        log.info("회원가입 페이지");
        return "/member/Register";
    }

    @PostMapping("/join")
    public String join(Member member) {
        log.info("회원가입 진행");
        memberService.join(member);
        return "redirect:/member/LoginForm";
    }

    @GetMapping("/join")
    public String join(Model model) {
        log.info("get join");
        Member member = new Member();
        model.addAttribute("model",model);
        return "/members/join";
    }

}
