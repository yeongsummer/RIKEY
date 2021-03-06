package com.ssafy.rikey.db.repository;

import com.ssafy.rikey.db.entity.Article;

import java.util.List;

public interface ArticleRepositoryCustom {

    List<Article> findRecentlyByCategoryOrderByHIts(String category);
    List<Article> findRecentlyOrderByHIts();
}
