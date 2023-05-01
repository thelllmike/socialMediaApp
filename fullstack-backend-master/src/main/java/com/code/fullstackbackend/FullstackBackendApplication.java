package com.code.fullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FullstackBackendApplication {

//	  @GetMapping
//	    public String welcome() {
//	        return "Welcome to Google !!";
//	    }
	
	
//	@GetMapping("/user")
//    public Principal user(Principal principal) {
//        System.out.println("username : " + principal.getName());
//        return principal;
//    }
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(FullstackBackendApplication.class, args);
	}

}
