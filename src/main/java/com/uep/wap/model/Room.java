package com.uep.wap.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private float price;
    private String name;
    @ManyToOne
    @JoinColumn(name = "accommodation_object_id")
    @JsonIdentityReference(alwaysAsId = true)
    private AccommodationObject accommodationObject;
    @OneToMany(mappedBy = "roomId", cascade = CascadeType.ALL)
    @JsonIdentityReference(alwaysAsId = true)
    private List<Reservation> reservations;
}
