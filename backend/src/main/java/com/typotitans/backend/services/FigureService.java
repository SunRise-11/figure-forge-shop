package com.typotitans.backend.services;

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

    public FigureService(FigureRepository figureRepository, PictureService pictureService) {
        this.figureRepository = figureRepository;
        this.pictureService = pictureService;
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

    public List<Figure> getAllFigures() {
        return figureRepository.findAll();
    }

    public Figure getFigure(String id) {
        return figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
    }

    public Figure addFigure(FigureDto request, MultipartFile[] pictures) {
        var figure = convertDtoToEntity(request);
        figureRepository.save(figure);
        var savedPictures = pictureService.savePicturesAsBlobs(pictures, figure);
        figure.setPictures(savedPictures);
        return getFigure(figure.getId());
    }

    public void deleteFigure(String id) {
        try {
            var figure = getFigure(id);
            figureRepository.delete(figure);
        } catch (NoSuchElementException exception) {
            System.out.println("Already deleted");
        }
    }

    public void delete() {

    }
}
