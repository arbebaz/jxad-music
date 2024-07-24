package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/upload-song")
public class UploadSongController {
    @GetMapping
    public String uploadSong() {
        return "upload-song";
    }
}
