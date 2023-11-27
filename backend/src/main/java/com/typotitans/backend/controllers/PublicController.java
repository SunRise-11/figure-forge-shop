package com.typotitans.backend.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.typotitans.backend.dtos.ResponseDto;
import com.typotitans.backend.models.Picture;
import com.typotitans.backend.services.FigureService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("public")
@CrossOrigin
public class PublicController {

    private final FigureService figureService;

    public PublicController(FigureService figureService) {
        this.figureService = figureService;
    }

    @GetMapping("figures")
    ResponseEntity<List<ResponseDto>> getAllFigures() {
        return ResponseEntity.ok().body(figureService.getAllFigures());
    }

    @GetMapping("figures/{id}")
    ResponseEntity<ResponseDto> getSpecificFigure(@PathVariable String id) {
        return ResponseEntity.ok(figureService.getFigure(id));
    }

    @PostMapping("figures")
    public ResponseEntity<ResponseDto> createFigure(
            @RequestBody String figureDetails,
            HttpServletRequest req) {

        try {
            var figure = figureService.addFigure(figureDetails);
            URI location = URI.create(req.getRequestURI() + "/" + figure.id());
            return ResponseEntity.created(location).body(figure);
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = "pictures")
    public ResponseEntity<Picture> uploadPicture(
            @RequestParam("picture") MultipartFile picture,
            HttpServletRequest req) {
        try {
            var savedPicture = figureService.savePicture(picture);
            URI location = URI.create(req.getRequestURI() + "/" + savedPicture.getId());
            return ResponseEntity.created(location).body(savedPicture);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("pictures/{id}")
    public ResponseEntity<byte[]> getPicture(
            @PathVariable String id) {
        return ResponseEntity.ok(figureService.getPicture(id));
    }
}
