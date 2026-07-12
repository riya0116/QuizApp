package com.riya.quizapp.repository;

import com.riya.quizapp.model.user;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface userRepository extends MongoRepository<user, String> {
    Optional<user> findByEmail(String email);

    Optional<user> findByEmailAndPassword(String email, String password);
}