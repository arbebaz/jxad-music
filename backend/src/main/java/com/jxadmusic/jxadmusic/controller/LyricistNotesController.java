package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/lyricist-notes")
public class LyricistNotesController {
    @GetMapping
    public String lyricistNotes() {
        return "lyricist-notes";
    }
}
