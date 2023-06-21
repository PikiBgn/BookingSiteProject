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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Entity
@NoArgsConstructor
public class AccommodationObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    @ManyToOne
    @JoinColumn(name = "accommodation_object_type_id")
    AccommodationObjectType accommodationObjectType;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User owner;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "localisation_id")
    Localization localisation;
    String description;
    String header;
    int stars;
    @OneToMany(mappedBy = "accommodationObject", cascade = CascadeType.ALL)
    private List<Room> room;
}
