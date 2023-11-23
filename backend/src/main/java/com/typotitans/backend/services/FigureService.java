package com.typotitans.backend.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.dtos.ResponseDto;
import com.typotitans.backend.dtos.UpdateDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.models.Picture;
import com.typotitans.backend.repositories.FigureRepository;
import com.typotitans.backend.repositories.PictureRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class FigureService {
    private final FigureRepository figureRepository;
    private final PictureRepository pictureRepository;
    private final ObjectMapper objectMapper;
    private final BlobService blobService;

    public FigureService(FigureRepository figureRepository,
                         PictureRepository pictureRepository, ObjectMapper objectMapper, BlobService blobService) {
        this.figureRepository = figureRepository;
        this.pictureRepository = pictureRepository;
        this.blobService = blobService;
        this.objectMapper = objectMapper;
    }

    private Figure convertDtoToEntity(FigureDto dto) {
        return new Figure(dto.name(), dto.origin(), dto.brand(), dto.price(), dto.width(),
                dto.length(), dto.height(), dto.weight(), dto.description(), dto.seller());
    }

    private FigureDto convertEntityToDto(Figure figure) {

        return new FigureDto(figure.getName(), figure.getDescription(),
                figure.getBrand(),
                figure.getPrice(), figure.getOrigin(), figure.getWidth(), figure.getHeight(),
                figure.getLength(), figure.getWeight(), figure.getSeller());
    }

    public List<ResponseDto> getAllFigures() {
        var figures = figureRepository.findAll();
        return figures.stream().map(
                figure -> objectMapper.convertValue(figure, ResponseDto.class)).toList();
    }

    public ResponseDto getFigure(String id) {
        var figure = figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
        return objectMapper.convertValue(figure, ResponseDto.class);
    }

    public ResponseDto addFigure(String figureDetails,
                               MultipartFile[] pictures) {
        Figure figure = null;
        try {
            figure = objectMapper.readValue(figureDetails, Figure.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        var savedPictures = Arrays.stream(pictures).map(picture -> {
            var savedPicture = new Picture();
            pictureRepository.save(savedPicture);
                try {
                    var blob = blobService.uploadBlob(savedPicture.getId(), picture);
                    savedPicture.setFileType(picture.getContentType());
                    savedPicture.setPictureUrl(blob);
                    return savedPicture;
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }).toList();

            figure.setPictures(savedPictures);

//        var savedPictures = pictureService.savePicturesAsBlobs(pictures, figure);
//        figure.setPictures(savedPictures);
        return objectMapper.convertValue(figureRepository.save(figure), ResponseDto.class);
    }

    public ResponseDto updateFigure(UpdateDto updateDto, String id) {
        Figure figure = figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
        figure.setName(updateDto.name());
        figure.setOrigin(updateDto.origin());
        figure.setBrand(updateDto.brand());
        figure.setWidth(updateDto.width());
        figure.setLength(updateDto.length());
        figure.setHeight(updateDto.height());
        figure.setWeight(updateDto.weight());
        figure.setDescription(updateDto.description());
        figure.setPrice(updateDto.price());
        figure.setRating(updateDto.rating());
        figure.setCondition(updateDto.condition());

        return objectMapper.convertValue(figureRepository.save(figure), ResponseDto.class);
    }

    public void deleteFigure(String id) {
        var figure = figureRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Figure not found"));
        figureRepository.delete(figure);
    }
}
