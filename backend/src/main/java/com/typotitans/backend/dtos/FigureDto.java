package com.typotitans.backend.dtos;

import com.typotitans.backend.models.Picture;
import com.typotitans.backend.models.Seller;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public record FigureDto(
        String name,
        String description,
        List<MultipartFile> pictures,
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
