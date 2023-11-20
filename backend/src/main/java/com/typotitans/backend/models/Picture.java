package com.typotitans.backend.models;

import jakarta.persistence.*;

@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String url;

    @ManyToOne
    private Figure figure;

    public Picture() {
    }

    public Picture(String url, Figure figure) {
        this.url = url;
        this.figure = figure;
    }

    public String getId() {
        return id;
    }
}
