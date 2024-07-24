package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/beatmaker-notes")
public class BeatmakerNotesController {
    @GetMapping
    public String beatmakerNotes() {
        return "beatmaker-notes";
    }
}
