package com.code.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.code.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
