package com.code.fullstackbackend.exception;

public class PostNotFoundException extends RuntimeException{

	public PostNotFoundException(Long id){
        super("Could not found the post with id "+ id);
    }
	
}

