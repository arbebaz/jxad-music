package com.jxadmusic.jxadmusic.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class HomeController {

    @RequestMapping("/api")

    @GetMapping("/home")
    public ResponseEntity<Map<String, String>> getHomeData() {
        Map<String, String> homeData = new HashMap<>();
        homeData.put("title", "Bienvenue sur JXAD Music");
        homeData.put("subtitle", "Votre plateforme de musique préférée");
        return ResponseEntity.ok(homeData);
    }
}
