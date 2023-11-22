package com.typotitans.backend.dtos;

import com.typotitans.backend.models.Seller;

import java.util.List;

public record FigureDto(
        String id,
        String name,
        String description,
        String brand,
        double price,
        String origin,
        int width,
        int height,
        int length,
        int weight,
        Seller seller,
        List<String> pictures
) {
}
