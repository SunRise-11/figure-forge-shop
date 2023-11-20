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
    private int width;
    private int length;
    private int height;
    private int weight;
    private String description;
    private double price;
    private int rating;

    @ManyToOne
    Seller seller;

    @OneToMany(
            mappedBy = "figure",
            cascade = CascadeType.ALL)
    private List<Picture> pictures;

    public Figure() {
    }

    public Figure(String name, String origin, String brand,double price, int width, int length, int height,
                  int weight, String description,
                  List<Picture> pictures, Seller seller) {
        this.name = name;
        this.origin = origin;
        this.brand = brand;
        this.width = width;
        this.length = length;
        this.height = height;
        this.weight = weight;
        this.description = description;
        this.price = price;
        this.pictures = pictures;
        this.seller = seller;
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

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public List<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(List<Picture> pictures) {
        this.pictures = pictures;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }
}
