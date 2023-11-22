package com.typotitans.backend.services;

import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.models.Picture;
import com.typotitans.backend.repositories.FigureRepository;
import com.typotitans.backend.repositories.PictureRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class FigureService {
    private final FigureRepository figureRepository;
    private final PictureRepository pictureRepository;

    public FigureService(FigureRepository figureRepository, PictureRepository pictureRepository) {
        this.figureRepository = figureRepository;
        this.pictureRepository = pictureRepository;
    }

    private Figure convertDtoToEntity(FigureDto dto) {
        return new Figure(dto.name(), dto.origin(), dto.brand(), dto.price(), dto.width(),
                dto.length(), dto.height(), dto.weight(), dto.description(), dto.seller());


    }

    private Picture savePictureAsBlob(MultipartFile image, Figure figure) {
        try {
            Picture picture = new Picture(image.getBytes(),figure);
            pictureRepository.save(picture);
            return picture;
            } catch (IOException exception) {
            System.out.println("Could not save image");
            return null;
        }
    }


    public List<Figure> getAllFigures() {
        return figureRepository.findAll();
    }

    public Figure getFigure(String id) {
        return figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
    }

    public Figure addFigure(FigureDto request) {
        var figure = convertDtoToEntity(request);
            request.pictures().stream().map(image -> savePictureAsBlob(image, figure));
        figureRepository.save(figure);

        return figure;
    }

    public void deleteFigure(String id) {
        try {
            var figure = getFigure(id);
            figureRepository.delete(figure);
        } catch (NoSuchElementException exception) {

        }
    }

    public void delete() {

    }
}
