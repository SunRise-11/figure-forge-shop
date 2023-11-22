package com.typotitans.backend.dtos;

import com.typotitans.backend.models.Picture;

import java.util.List;

public record ResponseDto(FigureDto figureDetails, List<Picture> pictures) {
}
