package com.typotitans.backend.dtos;

import com.typotitans.backend.models.Picture;

import java.util.List;

public record ResponseDto(
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
        int rating,
        List<Picture> pictures
) {
}
