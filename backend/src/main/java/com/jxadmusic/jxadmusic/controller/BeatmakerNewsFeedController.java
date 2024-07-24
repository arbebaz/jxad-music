package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/beatmaker-news-feed")
public class BeatmakerNewsFeedController {
    
    @GetMapping
    public String beatmakerNewsFeed() {
        return "beatmaker-news-feed";
    }
}
