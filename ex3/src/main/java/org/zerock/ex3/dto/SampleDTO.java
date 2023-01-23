package org.zerock.ex3.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
@Builder(toBuilder = true)
public class SampleDTO {

    private Long sno;

    private String first;

    private String last;

    private LocalDateTime regTime;


}
