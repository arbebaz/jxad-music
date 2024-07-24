package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/upload-beat")
public class UploadBeatController {
    @GetMapping
    public String uploadBeat() {
        return "upload-beat";
    }
}
