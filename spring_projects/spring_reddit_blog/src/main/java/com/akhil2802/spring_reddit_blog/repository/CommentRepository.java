package com.akhil2802.spring_reddit_blog.repository;

import com.akhil2802.spring_reddit_blog.model.Comment;
import com.akhil2802.spring_reddit_blog.model.Post;
import com.akhil2802.spring_reddit_blog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
