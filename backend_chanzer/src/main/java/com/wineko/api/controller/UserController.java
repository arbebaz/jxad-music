package com.wineko.api.controller;

import com.wineko.api.model.Users;
import com.wineko.api.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UsersService usersService;

//    @GetMapping("/users")
//    public String getAllUsers() {
//        return "hgfhgfhgf";
//    }

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers() {
        System.out.println(usersService.findAll());
        List<Users> users = usersService.findAll();
        return ResponseEntity.ok(users);
    }
}
