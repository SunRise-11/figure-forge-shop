package com.typotitans.backend.controllers;

import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.dtos.ResponseDto;
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

    public PublicController(FigureService figureService) {
        this.figureService = figureService;
    }

    @GetMapping
    ResponseEntity<List<ResponseDto>> getAllFigures() {
        return ResponseEntity.ok().body(figureService.getAllFigures());
    }

    @GetMapping("{id}")
    ResponseEntity<ResponseDto> getSpecificFigure(@PathVariable String id) {
        return ResponseEntity.ok(figureService.getFigure(id));
    }

        @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDto> createFigure(
            @RequestParam("pictures") MultipartFile[] pictures,
            @RequestParam("figureDetails") String figureDetails,
            HttpServletRequest req) {

        var figure = figureService.addFigure(figureDetails, pictures);
        URI location = URI.create(req.getRequestURI() + "/" + figure.id());

        return ResponseEntity.created(location).body(figure);
    }

}
