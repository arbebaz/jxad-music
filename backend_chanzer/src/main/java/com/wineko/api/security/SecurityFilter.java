package com.wineko.api.security;

import com.wineko.api.manager.JwtTokenManager;
import com.wineko.api.service.UsersService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private UsersService usersService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String urlRequest = request.getRequestURI();

        if (!urlRequest.startsWith("/api/open/")) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            String header = request.getHeader("Authorization");
            // Authentification
            // Authorization: bearer eyolfdilfsdkfdslkflsdkfjjdslfhlsdfjlsdfjlk
            String token = header.substring(7); //eyolfdilfsdkfdslkflsdkfjjdslfhlsdfjlsdfjlk
            token = JwtTokenManager.getUser(token);

            UserDetails user = usersService.findByToken(token);

            if (user == null){
                filterChain.doFilter(request, response);
                return;
            }
            // On le passe aux controllers grâce au context
            Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch (Exception e) {
            logger.info("Trying parse token but failed");
        }

        filterChain.doFilter(request, response);
    }
}
