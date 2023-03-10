package com.example.test_board.service;

import com.example.test_board.domain.Member;

import java.util.List;

public interface MemberService {
    // 회원 정보
    List<Member> userlist();

    // 로그인 체크

    // 회원 가입
    int join(Member member);

}
