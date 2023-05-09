package com.code.fullstackbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.code.fullstackbackend.model.Comment;

public interface CommentRepository extends JpaRepository<Comment,Long> {
}


