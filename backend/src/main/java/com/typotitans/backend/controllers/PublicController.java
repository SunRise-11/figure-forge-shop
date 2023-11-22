package com.typotitans.backend.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.dtos.ResponseDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.services.FigureService;
import jakarta.servlet.http.HttpServletRequest;
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
    private final ObjectMapper objectMapper;

    public PublicController(FigureService figureService, ObjectMapper objectMapper) {
        this.figureService = figureService;
        this.objectMapper = objectMapper;
    }

    @GetMapping
    ResponseEntity<List<ResponseDto>> getAllFigures() {
        var figures = figureService.getAllFigures();
//        ResponseDto response = new ResponseDto(objectMapper.convertValue(fig))
        var response = figures.stream().map(figure -> {
            var pictures = figure.getPictures();
            return new ResponseDto(objectMapper.convertValue(figure, FigureDto.class),
                    pictures);

        }).toList();

        return ResponseEntity.ok().body(response);
    }

    @GetMapping("{id}")
    ResponseEntity<Figure> getSpecificFigure(@PathVariable String id) {
        var figure = figureService.getFigure(id);
        return ResponseEntity.ok(figure);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDto> createFigure(
            @RequestParam("pictures") MultipartFile[] pictures,
            @RequestParam("figureDetails") String figureDetails,
            HttpServletRequest req) throws JsonProcessingException {
        FigureDto dto = objectMapper.readValue(figureDetails, FigureDto.class);

        Figure figure = figureService.addFigure(dto, pictures);
        URI location = URI.create(req.getRequestURI() + "/" + figure.getId());

        ResponseDto response = new ResponseDto(objectMapper.convertValue(figure, FigureDto.class),
                figure.getPictures());

        return ResponseEntity.created(location).body(response);
    }

}
