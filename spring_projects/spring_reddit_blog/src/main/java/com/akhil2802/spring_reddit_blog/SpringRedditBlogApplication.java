package com.akhil2802.spring_reddit_blog;

import com.akhil2802.spring_reddit_blog.config.SwaggerConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
@Import(SwaggerConfiguration.class)
public class SpringRedditBlogApplication {

    public static void main(String[] args) {
        SpringApplication.run(com.akhil2802.spring_reddit_blog.SpringRedditBlogApplication.class, args);
    }

}
