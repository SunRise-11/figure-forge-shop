package com.typotitans.backend.controllers;

import com.typotitans.backend.dtos.ResponseDto;
import com.typotitans.backend.dtos.UpdateDto;
import com.typotitans.backend.services.FigureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin/figures")
@CrossOrigin(origins = "*")
public class AdminController {

    private final FigureService figureService;

    public AdminController(FigureService figureService) {
        this.figureService = figureService;
    }

    @GetMapping
    ResponseEntity<String> test() {
        return ResponseEntity.ok("Test endpoint");
    }

    @DeleteMapping("{id}")
    ResponseEntity<Void> deleteFigure(@PathVariable String id) {
        figureService.deleteFigure(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}")
    ResponseEntity<ResponseDto> updateFigure(@RequestBody UpdateDto figure,
                                             @PathVariable String id) {
        return ResponseEntity.ok(figureService.updateFigure(figure, id));
    }
}
