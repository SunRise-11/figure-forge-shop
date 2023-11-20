package com.typotitans.backend.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    private String email;


    @OneToMany(
            mappedBy = "seller",
            cascade = CascadeType.ALL)
    private List<Figure> figures;
}
