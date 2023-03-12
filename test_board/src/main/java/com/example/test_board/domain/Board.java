package com.example.test_board.domain;

import lombok.Data;

import java.sql.Date;


@Data
public class Board {
    private int bno;
    private String title;
    private String writer;
    private String comment;
    private Date regDate;
    private Date  modDate;
    private int hit;
}

