package com.jxadmusic.jxadmusic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jxadmusic.jxadmusic.model.Users;
import com.jxadmusic.jxadmusic.repository.UsersRepository;

@Service
public class UsersService implements UserDetailsService {

    // associer à un repository
    @Autowired
    private UsersRepository usersRepository;

    public Users findByEmail(String email) {
        return usersRepository.findByEmailIgnoreCase(email);
    }

    public Users saveUser(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserDetails user = usersRepository.findByEmailIgnoreCase(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }
}
