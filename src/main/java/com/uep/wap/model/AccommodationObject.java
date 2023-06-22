package com.uep.wap.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

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
public class AccommodationObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne
    @JoinColumn(name = "accommodation_object_type_id")
    AccommodationObjectType accommodationObjectType;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIdentityReference(alwaysAsId = true)
    User owner;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "localisation_id")
    @JsonIdentityReference(alwaysAsId = true)
    Localization localisation;
    String description;
    String header;
    int stars;
    @OneToMany(mappedBy = "accommodationObject", cascade = CascadeType.ALL)
    @JsonIdentityReference(alwaysAsId = true)
    private List<Room> room;
}
