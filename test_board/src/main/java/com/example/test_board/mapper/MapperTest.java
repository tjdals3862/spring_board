package com.example.test_board.mapper;

import com.example.test_board.domain.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MapperTest {

    //annotation방식
    @Select("select * from member")
    List<Member> getList();

    //xml방식
    List<Member> getXmlList();

}