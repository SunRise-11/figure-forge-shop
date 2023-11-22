package com.typotitans.backend.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.services.FigureService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("public/figures")
@CrossOrigin
public class PublicController {

    private final FigureService figureService;
    private final ObjectMapper objectMapper;

    public PublicController(FigureService figureService, ObjectMapper objectMapper) {
        this.figureService = figureService;
        this.objectMapper = objectMapper;
    }

    @GetMapping
    ResponseEntity<List<Figure>> getAllFigures() {
        return ResponseEntity.ok(figureService.getAllFigures());
    }

    @GetMapping("{id}")
    ResponseEntity<Figure> getSpecificFigure(@PathVariable String id) {
        var figure = figureService.getFigure(id);
        return ResponseEntity.ok(figure);
    }

    @PostMapping
    ResponseEntity<FigureDto> createFigure(@RequestPart(value = "pictures") MultipartFile[] pictures,
                                        @RequestPart(value = "figureDetails") String figureDetails,
                                        HttpServletRequest req) throws JsonProcessingException {
        FigureDto dto = objectMapper.readValue(figureDetails, FigureDto.class);

        var figure = figureService.addFigure(dto, pictures);

        URI location = URI.create(req.getRequestURI() + "/" + figure.id());
        return ResponseEntity.created(location).body(figure);
    }
}
