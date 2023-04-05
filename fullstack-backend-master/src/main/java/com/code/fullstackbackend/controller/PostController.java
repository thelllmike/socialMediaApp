package com.code.fullstackbackend.controller;

import com.code.fullstackbackend.exception.PostNotFoundException;
import com.code.fullstackbackend.model.Post;
import com.code.fullstackbackend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @PostMapping("/post")
    Post newPost(@RequestBody Post newPost) {
        return postRepository.save(newPost);
    }

    @GetMapping("/posts")
    List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/post/{id}")
    Post getPostById(@PathVariable Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new PostNotFoundException(id));
    }

    @PutMapping("/post/{id}")
    Post updatePost(@RequestBody Post newPost, @PathVariable Long id) {
        return postRepository.findById(id)
                .map(post -> {
                	post.setLocation(newPost.getLocation());
                	post.setDescription(newPost.getDescription());
                	post.setHashtag(newPost.getHashtag());
                    return postRepository.save(post);
                }).orElseThrow(() -> new PostNotFoundException(id));
    }

    @DeleteMapping("/post/{id}")
    String deletePost(@PathVariable Long id){
        if(!postRepository.existsById(id)){
            throw new PostNotFoundException(id);
        }
        postRepository.deleteById(id);
        return  "post with id "+id+" has been deleted success.";
    }



}
