package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/upload-lyrics")
public class UploadLyricsController {
    @GetMapping
    public String uploadLyrics() {
        return "upload-lyrics";
    }
}
