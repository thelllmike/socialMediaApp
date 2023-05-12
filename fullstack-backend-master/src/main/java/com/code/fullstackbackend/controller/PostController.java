package com.code.fullstackbackend.controller;

import com.code.fullstackbackend.exception.PostNotFoundException;
import com.code.fullstackbackend.model.Post;
import com.code.fullstackbackend.repository.PostRepository;
import com.code.fullstackbackend.model.Comment;

//import org.hibernate.annotations.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


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
                	post.setComment(newPost.getComment());
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
    
//    @PostMapping("/posts/{postId}/comments")
//    Comment addComment(@PathVariable Long postId, @RequestBody Comment comment) {
//        Post post = postRepository.findById(postId)
//                .orElseThrow(() -> new PostNotFoundException(postId));
//        post.getComments().add(comment);
//        postRepository.save(post);
//        return comment;
//    }
    
    
//    @PostMapping("/{postId}/comments")
//    public ResponseEntity<?> addComment(@PathVariable Long postId, @RequestBody Comment comment) {
//        Post post = postRepository.findById(postId)
//                .orElseThrow(() -> new PostNotFoundException("Could not found the post with id " + postId));
//        post.addComment(comment);
//        postRepository.save(post);
//        return ResponseEntity.ok().build();
//    }

//    @GetMapping("/{postId}/comments")
//    public ResponseEntity<List<Comment>> getCommentsByPostId(@PathVariable Long postId) {
//        Optional<Post> post = postRepository.findById(postId);
//        if (post.isPresent()) {
//            List<Comment> comments = post.get().getComments();
//            return new ResponseEntity<>(comments, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }



}
