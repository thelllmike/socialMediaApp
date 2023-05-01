package com.code.fullstackbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.code.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
	  Optional<User> findByEmailAndPassword(String email, String password);
}


//public interface UserRepository extends JpaRepository<User, Long> {
//
//    Optional<User> findByEmailAndPassword(String email, String password);
//
//}
