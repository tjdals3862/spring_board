package hello.hellospring.controller;

import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MemberController {

    private final MemberService memberService;

    @Autowired // 생성자에 Autowired가 있으면 스프링컨테이너에서 가져와 연결해줌 -> DI 의존성 주입
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
