package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/explore-productions")
public class ExploreProductionsController {
    @GetMapping
    public String exploreProductions() {
        return "explore-productions";
    }
}
