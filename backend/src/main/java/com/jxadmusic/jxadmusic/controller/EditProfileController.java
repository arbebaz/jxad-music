package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/edit-profile")
public class EditProfileController {
    @GetMapping
    public String editProfile() {
        return "edit-profile";
    }
}
