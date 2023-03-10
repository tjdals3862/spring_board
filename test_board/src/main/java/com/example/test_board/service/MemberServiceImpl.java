package com.example.test_board.service;

import com.example.test_board.domain.Member;
import com.example.test_board.mapper.MemberMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class MemberServiceImpl implements MemberService {

    @Autowired
    MemberMapper memberMapper;

    @Override
    public List<Member> userlist() {
        return null;
    }

    @Override
    public int join(Member member) {
        int result = 0;
        result=memberMapper.join(member);
        log.info("result : "+result);
        return result;
    }
}
