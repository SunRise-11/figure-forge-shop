package com.typotitans.backend.models;

import jakarta.persistence.*;

import java.util.List;


@Entity
public class Figure {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    private String origin;
    private String brand;
    private Integer width;
    private Integer length;
    private Integer height;
    private Integer weight;
    private String description;
    private Double price;
    private Integer rating;

    @OneToMany(
            mappedBy = "figure",
            cascade = CascadeType.ALL)
    private List<Picture> pictures;

    public Figure() {
    }

    public Figure(String name, String origin, String brand, Double price, Integer width,
                  Integer diameter, Integer height, String description, String detail,
                  Integer length, Integer weight) {
        this.name = name;
        this.origin = origin;
        this.brand = brand;
        this.price = price;
        this.width = width;
        this.height = height;
        this.description = description;
        this.length = length;
        this.weight = weight;
    }

}
