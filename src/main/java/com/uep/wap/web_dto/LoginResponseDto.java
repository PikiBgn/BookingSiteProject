package com.uep.wap.web_dto;

import java.time.Instant;
import java.util.Objects;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginResponseDto {
    private String email;
    private String password;

    public LoginResponseDto(String aEmail, String aPassword )
    {
        Objects.requireNonNull( aEmail );
        Objects.requireNonNull( aPassword );
        email = aEmail;
        password = aPassword;
    }
}
