package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/moderate-content")
public class ModerateContentController {
    @GetMapping
    public String moderateContent() {
        return "moderate-content";
    }
}
