package com.jxadmusic.jxadmusic.model;

import jakarta.persistence.*;
import lombok.Data;

import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "roles")
@Data
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Override
    public String getAuthority() {
        return this.name; // nom du role
    }
}
