package com.typotitans.backend.services;

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


    public List<Figure> getAllFigures () {
        return figureRepository.findAll();
    }

    public Figure getFigure (String id) {
        return figureRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Figure not found"));
    }
}
