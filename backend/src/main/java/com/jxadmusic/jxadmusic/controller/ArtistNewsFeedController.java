package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/artist-news-feed")
public class ArtistNewsFeedController {
    @GetMapping
    public String artistNewsFeed() {
        return "artist-news-feed";
    }
}
