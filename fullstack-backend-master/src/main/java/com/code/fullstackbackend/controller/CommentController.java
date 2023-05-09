package com.code.fullstackbackend.controller;

import com.code.fullstackbackend.exception.CommentNotFoundExeption;
import com.code.fullstackbackend.model.Comment;
import com.code.fullstackbackend.repository.CommentRepository;


//import org.hibernate.annotations.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;

    @PostMapping("/comment")
    Comment newPost(@RequestBody Comment newPost) {
        return commentRepository.save(newPost);
    }

    @GetMapping("/comments")
    List<Comment> getAllComment() {
        return commentRepository.findAll();
    }

    @GetMapping("/comment/{id}")
    Comment getCommentById(@PathVariable Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundExeption(id));
    }

    @PutMapping("/comment/{id}")
    Comment updateComment(@RequestBody Comment newComment, @PathVariable Long id) {
        return commentRepository.findById(id)
                .map(comment -> {
                	comment.setText(newComment.getText());
                	
                    return commentRepository.save(comment);
                }).orElseThrow(() -> new CommentNotFoundExeption(id));
    }

    @DeleteMapping("/comment/{id}")
    String deleteComment(@PathVariable Long id){
        if(!commentRepository.existsById(id)){
            throw new CommentNotFoundExeption(id);
        }
        commentRepository.deleteById(id);
        return  "post with id "+id+" has been deleted success.";
    }
    





}

