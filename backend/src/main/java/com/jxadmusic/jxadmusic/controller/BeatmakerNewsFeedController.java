package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/beatmaker-news-feed")

public class BeatmakerNewsFeedController {
    
    @GetMapping
    public String beatmakerNewsFeed() {
        return "beatmaker-news-feed";
    }
}
