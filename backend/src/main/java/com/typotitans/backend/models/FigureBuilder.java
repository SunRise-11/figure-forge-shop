package com.typotitans.backend.models;

public class FigureBuilder {
    private String name;
    private String origin;
    private String brand;
    private double price;
    private int width;
    private int length;
    private int height;
    private int weight;
    private String description;
    private Seller seller;

    public FigureBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public FigureBuilder setOrigin(String origin) {
        this.origin = origin;
        return this;
    }

    public FigureBuilder setBrand(String brand) {
        this.brand = brand;
        return this;
    }

    public FigureBuilder setPrice(double price) {
        this.price = price;
        return this;
    }

    public FigureBuilder setWidth(int width) {
        this.width = width;
        return this;
    }

    public FigureBuilder setLength(int length) {
        this.length = length;
        return this;
    }

    public FigureBuilder setHeight(int height) {
        this.height = height;
        return this;
    }

    public FigureBuilder setWeight(int weight) {
        this.weight = weight;
        return this;
    }

    public FigureBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public FigureBuilder setSeller(Seller seller) {
        this.seller = seller;
        return this;
    }

    public Figure createFigure() {
        return new Figure(name, origin, brand, price, width, length, height, weight, description,
                seller);
    }
}