package com.typotitans.backend.dtos;

import com.typotitans.backend.models.Picture;

import java.util.List;

public record FigureDto(
        String name,
        String origin,
        String brand,
        double price,
        int width,
        int height,
        int length,
        String description,
        int weight,
        List<Picture> pictures
) {
}
