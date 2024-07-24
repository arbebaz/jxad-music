package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/news-feed")
public class NewsFeedController {
    @GetMapping
    public String newsFeed() {
        return "news-feed";
    }
}
