package com.riya.quizapp.controller;

import com.riya.quizapp.model.user;
import com.riya.quizapp.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5174")
public class userController {

    @Autowired
    private userService userService;

    @PostMapping("/register")
    public user registerUser(@RequestBody user user) {
        return userService.registerUser(user);
    }
    @PostMapping("/login")
    public user loginUser(@RequestBody user user) {

        return userService.loginUser(
                user.getEmail(),
                user.getPassword()
        );
}