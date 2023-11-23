package com.typotitans.backend.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.repositories.FigureRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class FigureService {
    private final FigureRepository figureRepository;
    private final PictureService pictureService;
    private final ObjectMapper objectMapper;

    public FigureService(FigureRepository figureRepository, PictureService pictureService,
                         ObjectMapper objectMapper) {
        this.figureRepository = figureRepository;
        this.pictureService = pictureService;
        this.objectMapper = objectMapper;
    }

    private Figure convertDtoToEntity(FigureDto dto) {
        return new Figure(dto.name(), dto.origin(), dto.brand(), dto.price(), dto.width(),
                dto.length(), dto.height(), dto.weight(), dto.description(), dto.seller());
    }

    private FigureDto convertEntityToDto(Figure figure) {
        var pictureBlobs = figure.getPictures();
        var pictures = pictureBlobs.stream().map(picture -> Base64.getEncoder().encodeToString(
                picture.getImage())).toList();

        return new FigureDto(figure.getId(), figure.getName(), figure.getDescription(),
                figure.getBrand(),
                figure.getPrice(), figure.getOrigin(), figure.getWidth(), figure.getHeight(),
                figure.getLength(), figure.getWeight(), figure.getSeller());
    }

    public List<FigureDto> getAllFigures() {
        var figures = figureRepository.findAll();
        return figures.stream().map(figure -> objectMapper.convertValue(figure, FigureDto.class)).toList();
    }

    public FigureDto getFigure(String id) {
        var figure = figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
        return objectMapper.convertValue(figure, FigureDto.class);
    }

    public FigureDto addFigure(String request) throws JsonProcessingException {
//        public FigureDto addFigure(String request, MultipartFile[] pictures) throws JsonProcessingException {
        FigureDto dto = objectMapper.readValue(request, FigureDto.class);
        var figure = convertDtoToEntity(dto);

        figureRepository.save(figure);
//        var savedPictures = pictureService.savePicturesAsBlobs(pictures, figure);
//        figure.setPictures(savedPictures);
        return getFigure(figure.getId());
    }

    public void deleteFigure(String id) {
        var figure = figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
            figureRepository.delete(figure);
    }
}
