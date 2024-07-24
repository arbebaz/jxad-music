package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/new-publication")
public class NewPublicationController {
    @GetMapping
    public String newPublication() {
        return "new-publication";
    }
}
