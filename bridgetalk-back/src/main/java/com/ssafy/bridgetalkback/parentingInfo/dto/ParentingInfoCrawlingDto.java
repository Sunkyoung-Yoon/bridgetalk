package com.ssafy.bridgetalkback.parentingInfo.dto;

import com.ssafy.bridgetalkback.parentingInfo.domain.Age;

public record ParentingInfoCrawlingDto(
        String title_kor,
        String title_viet,
        String content_kor,
        String content_viet,
        String url,
        Age age
) {
}
