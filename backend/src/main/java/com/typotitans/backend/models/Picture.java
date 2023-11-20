package com.typotitans.backend.models;

import jakarta.persistence.*;

@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Lob
    private byte[] image;

    @ManyToOne
    private Figure figure;

    public Picture() {
    }

    public Picture(byte[] image, Figure figure) {
        this.image = image;
        this.figure = figure;
    }

    public String getId() {
        return id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Figure getFigure() {
        return figure;
    }

    public void setFigure(Figure figure) {
        this.figure = figure;
    }
}
