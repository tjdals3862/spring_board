package com.example.test_board.domain;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BoardList {
    private int bno;
    private String title;
    private String writer;
    private LocalDateTime regDate;
    private LocalDateTime modDate;
    private int hit;
}
