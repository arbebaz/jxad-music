package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientController {

    @GetMapping("/client")
    public String home(){
        return "homeClient";
    }
}
