package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/lyricist-news-feed")
public class LyricistNewsFeedController {
    @GetMapping
    public String lyricistNewsFeed() {
        return "lyricist-news-feed";
    }
}
