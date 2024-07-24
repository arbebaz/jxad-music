package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/artist-notes")
public class ArtistNotesController {
    
    @GetMapping
    public String artistNotes() {
        return "artist-notes";
    }
}
