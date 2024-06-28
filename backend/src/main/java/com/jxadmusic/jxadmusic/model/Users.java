package com.jxadmusic.jxadmusic.model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class Users implements UserDetails {

    @Id // primary key
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY) // auto increment
    private Integer id;

    private String name;
    private String email;
    private String password;
    private boolean active;

    // un user associer à plusieurs roles
    @ManyToMany(fetch = FetchType.EAGER) // fetch recupère les données de la table role
    private List<Role> roles;

    // un user associer à un role
    // @ManyToOne
    // private Role role; 

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles; 

        // List<Role> roles = new ArrayList<Role>(); 
        // roles.add(role);
        // return List.of(role); 
    }

    @Override
    public String getUsername() { // page login
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.active;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.active;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.active;
    }

    @Override
    public boolean isEnabled() {
        return this.active;
    }

}
