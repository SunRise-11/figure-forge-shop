package com.typotitans.backend.dtos;

public record FigureDto(
        String name,
        String description,
        String brand,
        double price,
        String origin,
        int width,
        int height,
        int length,
        int weight,
        String seller
) {
}
