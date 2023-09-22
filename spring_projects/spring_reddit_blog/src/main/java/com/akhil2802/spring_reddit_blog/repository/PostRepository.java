package com.akhil2802.spring_reddit_blog.repository;

import com.akhil2802.spring_reddit_blog.model.Post;
import com.akhil2802.spring_reddit_blog.model.Subreddit;
import com.akhil2802.spring_reddit_blog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllBySubreddit(Subreddit subreddit);

    List<Post> findByUser(User user);
}
