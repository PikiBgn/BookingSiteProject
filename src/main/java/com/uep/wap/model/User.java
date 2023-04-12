package com.uep.wap.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

public class User {

    int id;
    String firstName;
    String lastName;
    String email;
    LocalDate birthdate;
    String password;
    int failedAttempts;
    boolean isLocked;
    LocalDateTime whenAccountLocked;
    UserRole role_id;

}
