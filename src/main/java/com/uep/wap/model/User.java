package com.uep.wap.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthdate;
    private String password;
    private int failedAttempts;
    private boolean isLocked;
    private LocalDateTime whenAccountLocked;
    private UserRole role;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIdentityReference(alwaysAsId = true)
    private List<Reservation> reservation;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    @JsonIdentityReference(alwaysAsId = true)
    private List<AccommodationObject> accommodationObjects;
}
