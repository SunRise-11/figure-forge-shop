package com.typotitans.backend.controllers;

import com.typotitans.backend.models.Figure;
import com.typotitans.backend.services.FigureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("public/figures")
@CrossOrigin
public class PublicController {

    private final FigureService figureService;

    public PublicController(FigureService figureService) {
        this.figureService = figureService;
    }

    @GetMapping
    ResponseEntity<List<Figure>> getAllFigures () {
        return ResponseEntity.ok(figureService.getAllFigures());
    }

    @GetMapping("{id}")
    ResponseEntity<Figure> getSpecificFigure (@PathVariable String id) {
        var figure = figureService.getFigure(id);
        return ResponseEntity.ok(figure);
    }
}
