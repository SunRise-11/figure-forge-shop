package com.typotitans.backend.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.dtos.ResponseDto;
import com.typotitans.backend.dtos.UpdateDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.repositories.FigureRepository;
import org.springframework.stereotype.Service;

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

        return new FigureDto(figure.getName(), figure.getDescription(),
                figure.getBrand(),
                figure.getPrice(), figure.getOrigin(), figure.getWidth(), figure.getHeight(),
                figure.getLength(), figure.getWeight(), figure.getSeller());
    }

    public List<ResponseDto> getAllFigures() {
        var figures = figureRepository.findAll();
        return figures.stream().map(
                figure -> objectMapper.convertValue(figure, ResponseDto.class)).toList();
    }

    public ResponseDto getFigure(String id) {
        var figure = figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
        return objectMapper.convertValue(figure, ResponseDto.class);
    }

    public ResponseDto addFigure(FigureDto request) {
//        public FigureDto addFigure(String request, MultipartFile[] pictures) throws JsonProcessingException {
//        FigureDto dto = objectMapper.readValue(request, FigureDto.class);
        var figure = convertDtoToEntity(request);

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

    public ResponseDto updateFigure(UpdateDto updateDto, String id) {
        Figure figure = figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
        figure.setName(updateDto.name());
        figure.setOrigin(updateDto.origin());
        figure.setBrand(updateDto.brand());
        figure.setWidth(updateDto.width());
        figure.setLength(updateDto.length());
        figure.setHeight(updateDto.height());
        figure.setWeight(updateDto.weight());
        figure.setDescription(updateDto.description());
        figure.setPrice(updateDto.price());
        figure.setRating(updateDto.rating());
        figure.setCondition(updateDto.condition());

        return objectMapper.convertValue(figureRepository.save(figure), ResponseDto.class);
    }
}
