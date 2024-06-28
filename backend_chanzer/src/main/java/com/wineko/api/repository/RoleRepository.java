package com.wineko.api.repository;

import com.wineko.api.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Role findByNameLikeIgnoreCase(String name);

}
