package com.jxadmusic.jxadmusic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.jxadmusic.jxadmusic.model.Role;
import com.jxadmusic.jxadmusic.model.Users;
import com.jxadmusic.jxadmusic.service.RoleService;
import com.jxadmusic.jxadmusic.service.UsersService;

@Controller
public class HomeController {

    @Autowired
    private RoleService roleService;

    @Autowired
    private UsersService usersService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/")
    public String home() {

        // Créer un compte
        /*
         * Role role = new Role();
         * role.setName("CLIENT");
         * roleService.saveRole(role);
         * 
         * Users users = new Users();
         * users.setEmail("a@a.fr");
         * users.setPassword(bCryptPasswordEncoder.encode("admin"));
         * users.setRoles(List.of(role));
         * users.setName("Admin");
         * 
         * usersService.saveUser(users);
         */

        // Ajouter le role au compte
        return "home"; // le nom de la view dans le répertoire template
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
