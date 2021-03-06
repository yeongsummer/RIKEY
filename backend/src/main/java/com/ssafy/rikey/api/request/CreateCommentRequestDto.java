package com.ssafy.rikey.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel("CreateCommentRequestDto")
public class CreateCommentRequestDto {

    @ApiModelProperty(value = "유저 id", example = "adsfsdf")
    private String userId;

    @ApiModelProperty(value = "댓글 내용", example = "내용1", required = true)
    private String content;

    @ApiModelProperty(value = "게시글 id", example = "1", required = true)
    private Long articleId;
}

