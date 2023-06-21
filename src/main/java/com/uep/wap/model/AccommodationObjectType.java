package com.uep.wap.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AccommodationObjectType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    private String type;
    @OneToMany(mappedBy = "accommodationObjectType", cascade = CascadeType.ALL)
    private List<AccommodationObject> accommodationObjects;
}
