package com.uep.wap.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Localization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String country;
    private String city;
    private String postCode;
    private String street;
    private int houseNumber;
    private float latitude;
    private float longitude;
    @OneToOne(mappedBy = "localisation", cascade = CascadeType.ALL)
    private AccommodationObject accommodationObject;

}
