package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/manage-songs")
public class ManageSongsController {
    @GetMapping
    public String manageSongs() {
        return "manage-songs";
    }
}
