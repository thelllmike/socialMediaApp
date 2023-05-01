package com.code.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}

//public class UserNotFoundException extends RuntimeException {
//    public UserNotFoundException(Long id, String message){
//        super("Could not find the user with id "+ id + ". " + message);
//    }
//}
