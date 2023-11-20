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
                  Integer height, Integer length,Integer weight, String description) {
        this.name = name;
        this.origin = origin;
        this.brand = brand;
        this.price = price;
        this.width = width;
        this.height = height;
        this.length = length;
        this.description = description;
        this.weight = weight;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public List<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(List<Picture> pictures) {
        this.pictures = pictures;
    }
}
