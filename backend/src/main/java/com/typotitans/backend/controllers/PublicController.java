package com.typotitans.backend.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.dtos.ResponseDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.services.FigureService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
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

    public PublicController(FigureService figureService) {
        this.figureService = figureService;
    }

    @GetMapping
    ResponseEntity<List<FigureDto>> getAllFigures() {
//        var figures = figureService.getAllFigures();
//        ResponseDto response = new ResponseDto(objectMapper.convertValue(fig))
//        var response = figures.stream().map(figure -> {
//            var pictures = figure.getPictures();
//            return new ResponseDto(objectMapper.convertValue(figure, FigureDto.class),
//                    pictures);
//
//        }).toList();

        return ResponseEntity.ok().body(figureService.getAllFigures());
    }

    @GetMapping("{id}")
    ResponseEntity<FigureDto> getSpecificFigure(@PathVariable String id) {
        return ResponseEntity.ok(figureService.getFigure(id));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<FigureDto> createFigure(
//            @RequestParam("pictures") MultipartFile[] pictures,
            @RequestParam("figureDetails") String figureDetails,
            HttpServletRequest req) throws JsonProcessingException {

        var figure = figureService.addFigure(figureDetails);
        URI location = URI.create(req.getRequestURI() + "/" + figure.id());

//        ResponseDto response = new ResponseDto(objectMapper.convertValue(figure, FigureDto.class),
//                figure.getPictures());

        return ResponseEntity.created(location).body(figure);
    }

}
