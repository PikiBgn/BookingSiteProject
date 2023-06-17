package com.uep.wap.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class AccommodationObjectType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    private String type;
    @OneToMany(mappedBy = "accommodationObjectType", cascade = CascadeType.ALL)
    private List<AccommodationObject> accommodationObjects;
}
