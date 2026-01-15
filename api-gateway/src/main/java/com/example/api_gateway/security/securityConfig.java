package com.example.api_gateway.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

import java.net.URI;

@Configuration
@EnableWebFluxSecurity
public class securityConfig {
    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http.csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(exchange -> exchange
                        .pathMatchers("/",
                                "/index.html",
                                "/public/**",
                                "/_next/**",
                                "/favicon.ico",
                                "/oauth2/**",
                                "/login/**",
                                "/logout"  )
                        .permitAll()
                        .anyExchange().authenticated()
                        )
                .oauth2Login(Customizer.withDefaults())
                .oauth2Client(Customizer.withDefaults())
                .logout(logout -> logout.logoutSuccessHandler((exchange, authentication) -> {
                    exchange.getExchange().getResponse().setStatusCode(HttpStatus.FOUND);
                    exchange.getExchange().getResponse()
                            .getHeaders().setLocation(URI.create("/"));
                    return exchange.getExchange().getResponse().setComplete();
                }));




        return http.build();
    }
}
