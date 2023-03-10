package com.example.test_board.domain;

import lombok.Data;

@Data
public class Member {
    private String id;
    private String name;
    private String password;
    private String email;

    public Member(){}

    public Member(String id, String name, String password, String email) {
        this.id =id;
        this.name= name;
        this.password=password;
        this.email=email;
    }
}
