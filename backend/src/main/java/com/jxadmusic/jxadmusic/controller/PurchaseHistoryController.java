package com.jxadmusic.jxadmusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/purchase-history")
public class PurchaseHistoryController {
    @GetMapping
    public String purchaseHistory() {
        return "purchase-history";
    }
}
