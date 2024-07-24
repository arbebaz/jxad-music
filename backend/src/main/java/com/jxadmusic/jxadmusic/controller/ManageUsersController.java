package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/manage-users")
public class ManageUsersController {
    @GetMapping
    public String manageUsers() {
        return "manage-users";
    }
}
