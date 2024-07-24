package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/explore-users")
public class ExploreUsersController {
    @GetMapping
    public String exploreUsers() {
        return "explore-users";
    }
}
