package com.jxadmusic.jxadmusic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jxadmusic.jxadmusic.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Role findByNameLikeIgnoreCase(String name);

}
