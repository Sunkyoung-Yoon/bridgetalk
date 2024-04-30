package com.ssafy.bridgetalkback.letters.dto.request;

import com.ssafy.bridgetalkback.letters.domain.Letters;
import com.ssafy.bridgetalkback.parents.domain.Parents;
import com.ssafy.bridgetalkback.reports.domain.Reports;
import lombok.Builder;
import org.springframework.web.multipart.MultipartFile;

@Builder
public record LettersRequestDTO(
        Long reportsId,
        MultipartFile lettersFile
) {
}
