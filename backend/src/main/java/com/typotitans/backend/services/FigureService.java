package com.typotitans.backend.services;

import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.repositories.FigureRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class FigureService {
    private final ModelMapper modelMapper;
    private final FigureRepository figureRepository;

    public FigureService(ModelMapper modelMapper, FigureRepository figureRepository) {
        this.modelMapper = modelMapper;
        this.figureRepository = figureRepository;
    }

    private Figure convertDtoToEntity(FigureDto dto) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STANDARD);
        return modelMapper.map(dto, Figure.class);
    }


    public List<Figure> getAllFigures () {
        return figureRepository.findAll();
    }

    public Figure getFigure (String id) {
        return figureRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Figure not found"));
    }

    public Figure addFigure (FigureDto request) {
        var figure = convertDtoToEntity(request);
        figureRepository.save(figure);

        return figure;
    }
}
