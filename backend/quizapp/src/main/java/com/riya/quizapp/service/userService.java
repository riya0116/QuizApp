package com.riya.quizapp.service;

import com.riya.quizapp.model.user;
import com.riya.quizapp.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userService {

    @Autowired
    private userRepository userRepository;

    public user registerUser(user user) {
        return userRepository.save(user);
    }
    public user loginUser(String email, String password) {

        return userRepository
                .findByEmailAndPassword(email, password)
                .orElse(null);

    }
}