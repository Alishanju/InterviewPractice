package com.sprinboot.project1;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class WelcomeController {
    @GetMapping("/welcome")
    public String getMethodName() {
        return  "Welcome to Springboot!!!";
    }
    
    
}
