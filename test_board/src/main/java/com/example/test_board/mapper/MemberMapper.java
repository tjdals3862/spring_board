package com.example.test_board.mapper;

import com.example.test_board.domain.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MemberMapper {

    //xml방식
    int join(Member member);

    //annotation방식
    @Select("select * from member")
    List<Member> getList();

    //xml방식
    List<Member> getXmlList();
}
