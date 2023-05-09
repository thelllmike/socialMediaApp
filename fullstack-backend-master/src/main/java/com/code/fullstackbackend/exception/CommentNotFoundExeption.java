package com.code.fullstackbackend.exception;



public class CommentNotFoundExeption extends RuntimeException{

	public CommentNotFoundExeption(Long id){
        super("Could not found the post with id "+ id);
    }

	public CommentNotFoundExeption(String string) {
		// TODO Auto-generated constructor stub
	}
	
}

