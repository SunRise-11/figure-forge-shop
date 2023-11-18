package com.typotitans.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

@Entity
public class Test {
    @Id
    @UuidGenerator
    private String id;
    private String name;
}
