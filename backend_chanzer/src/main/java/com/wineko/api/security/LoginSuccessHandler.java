package com.wineko.api.security;

import com.wineko.api.model.Role;
import com.wineko.api.model.Users;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;

public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Users user = (Users) authentication.getPrincipal();

        String redirectUrl;

        for (Role role : user.getRoles()) {
            switch (role.getName()) {
                case "ADMIN":
                    redirectUrl = "/dashboard";
                    break;
                case "CLIENT":
                    redirectUrl = "/client";
                    break;
                default:
                    redirectUrl = "/login";
                    break;
            }
            response.sendRedirect(redirectUrl);
            return;
        }
    }
}
