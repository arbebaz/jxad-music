package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/new-publication")

public class NewPublicationController {
    @GetMapping
    public String newPublication() {
        return "new-publication";
    }
}
