package com.typotitans.backend.dtos;

import com.typotitans.backend.models.Picture;
import com.typotitans.backend.models.Seller;

import java.util.List;

public record FigureDto(
        String name,
        String description,
        List<Picture> pictures,
        String brand,
        double price,
        String origin,
        int width,
        int height,
        int length,
        int weight,
        Seller seller
) {
}
