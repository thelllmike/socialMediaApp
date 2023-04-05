package com.code.fullstackbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.code.fullstackbackend.model.Post;

public interface PostRepository extends JpaRepository<Post,Long> {
}

