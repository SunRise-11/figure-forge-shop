package com.typotitans.backend.dtos;

public record UpdateDto(
        String name,
        String description,
        String condition,
        String brand,
        double price,
        String origin,
        int width,
        int height,
        int length,
        int weight,
        int rating
) {

}
