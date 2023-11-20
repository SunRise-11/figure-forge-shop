package com.typotitans.backend.controllers;

import com.typotitans.backend.services.FigureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin/figures")
@CrossOrigin
public class AdminController {

    private final FigureService figureService;

    public AdminController(FigureService figureService) {
        this.figureService = figureService;
    }

    @DeleteMapping("{id}")
    ResponseEntity<Void> deleteFigure(@PathVariable String id) {
        figureService.deleteFigure(id);
        return ResponseEntity.noContent().build();
    }
}
