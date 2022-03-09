package com.ssafy.rikey.api.service;

import com.ssafy.rikey.db.entity.Article;
import com.ssafy.rikey.db.entity.Like;
import com.ssafy.rikey.db.entity.User;
import com.ssafy.rikey.db.repository.ArticleRepository;
import com.ssafy.rikey.db.repository.LikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class LikeServiceImpl implements LikeService {

    private final LikeRepository likeRepository;

    private final ArticleRepository articleRepository;

    // 좋아요 등록
    @Override
    public void createLike(User user, Long articleId) {
        Article article = articleRepository.findById(articleId).get();
        Like like = Like.builder()
                .user(user)
                .article(article)
                .build();
        likeRepository.save(like);
    }
}