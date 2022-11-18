package com.olinger.family.controllers;

import com.olinger.family.entities.UserDTO;
import com.olinger.family.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController("com.olinger.family.controllers.MainController")
@CrossOrigin(origins = "http://localhost:5000")
@RequestMapping("/v1/")
public class MainController {
    @Autowired
    @Qualifier("com.olinger.family.services.UserService")
    private UserService userService;
    @PostMapping("/test/user")
    public ResponseEntity<Boolean> testUser(@RequestBody UserDTO queryRequest){
        if(userService.login(queryRequest.getUsername(), queryRequest.getPassword())){
            return new ResponseEntity<>(true, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
        }

    }
    @PostMapping("/insert/user")
    public ResponseEntity<Boolean> insertUser(@RequestBody UserDTO queryRequest) {
        return new ResponseEntity<Boolean>(userService.register(queryRequest.getUsername(), queryRequest.getPassword()),HttpStatus.OK);
    }
}
