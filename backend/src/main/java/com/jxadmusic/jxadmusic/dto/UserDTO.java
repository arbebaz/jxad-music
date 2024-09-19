package com.jxadmusic.jxadmusic.dto;

import java.util.List;

import lombok.Data;

@Data
public class UserDTO {
    private Integer id;
    private String name;
    private String email;
    private boolean active;
    private List<String> roles; // On peut stocker les noms des rôles ici
}