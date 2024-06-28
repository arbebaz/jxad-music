package com.wineko.api.service;

import com.wineko.api.model.Role;
import com.wineko.api.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService  {

    // associer à un repository
    @Autowired // new UserRepository
    private RoleRepository roleRepository;

    public Role save(String name){
        Role role = findByName(name); // chercher dans la bd
        if(role != null){
            return role;
        }
        role = new Role();
        role.setName(name);
        return roleRepository.save(role);
    }

    public Role findByName(String name){
        return roleRepository.findByNameLikeIgnoreCase(name);
    }

}
