package com.uep.wap.web_dto;

import java.util.Objects;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginRequestDto {
    private String email;
    private String password;

    public LoginRequestDto(String aEmail, String aPassword){
        Objects.requireNonNull( aEmail );
        Objects.requireNonNull( aPassword );
        email = aEmail;
        password = aPassword;
    }
}
