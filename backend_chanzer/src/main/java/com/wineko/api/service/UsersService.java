package com.wineko.api.service;

import com.wineko.api.model.Users;
import com.wineko.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public Users save(Users users){
        return userRepository.save(users);
    }

    public Users findByEmail(String email){
        if (email == null) {
            return null;
        }
        return userRepository.findByEmail(email.toLowerCase().trim());
    }

    public Users findByToken(String token){
        if (token == null) {
            return null;
        }
        return userRepository.findByToken(token);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.findByEmailLikeIgnoreCase(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }

    public List<Users> findAll() {
        return userRepository.findAll();
    }
}
