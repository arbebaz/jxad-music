package com.jxadmusic.jxadmusic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jxadmusic.jxadmusic.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    // insert, update, delete, select

    // select * from user where email like 'email'
    Users findByEmailIgnoreCase(String email);
}
