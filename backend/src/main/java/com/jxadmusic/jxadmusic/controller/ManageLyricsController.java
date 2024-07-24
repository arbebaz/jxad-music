package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/manage-lyrics")
public class ManageLyricsController {
    @GetMapping
    public String manageLyrics() {
        return "manage-lyrics";
    }
}
