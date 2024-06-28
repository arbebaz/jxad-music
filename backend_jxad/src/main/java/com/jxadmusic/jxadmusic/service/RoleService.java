package com.jxadmusic.jxadmusic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jxadmusic.jxadmusic.model.Role;
import com.jxadmusic.jxadmusic.repository.RoleRepository;

@Service
public class RoleService {

    // associer à un repository
    @Autowired
    private RoleRepository roleRepository;

    public Role saveRole(Role role) {
        // on cherche si le nom existe avant de l'ajouter
        Role findRole = roleRepository.findByNameLikeIgnoreCase(role.getName());
        if (findRole != null) {
            return findRole;
        }
        return roleRepository.save(role);
    }
}
