package com.thomascode.auth;

public record AuthenticationRequest(
        String username,
        String password
) {
}
