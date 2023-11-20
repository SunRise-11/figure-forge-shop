package com.typotitans.backend.services;

import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.repositories.FigureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class FigureService {
    private final FigureRepository figureRepository;

    public FigureService(FigureRepository figureRepository) {
        this.figureRepository = figureRepository;
    }

    private Figure convertDtoToEntity(FigureDto dto) {
        return new Figure(dto.name(), dto.origin(), dto.brand(), dto.price(), dto.width(),
                dto.length(), dto.height(), dto.weight(), dto.description(), dto.pictures(), dto.seller());
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
}
