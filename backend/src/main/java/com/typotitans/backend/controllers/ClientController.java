package com.typotitans.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("client")
@CrossOrigin
public class ClientController {

    @GetMapping
    ResponseEntity<String> Test () {
        return ResponseEntity.ok("Test");
    }
}
