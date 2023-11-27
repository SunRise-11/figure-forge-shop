package com.typotitans.backend.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.dtos.ResponseDto;
import com.typotitans.backend.dtos.UpdateDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.models.Picture;
import com.typotitans.backend.repositories.FigureRepository;
import com.typotitans.backend.repositories.PictureRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class FigureService {
    private final FigureRepository figureRepository;
    private final PictureRepository pictureRepository;
    private final ObjectMapper objectMapper;
    private final BlobService blobService;

    public FigureService(FigureRepository figureRepository,
                         PictureRepository pictureRepository, ObjectMapper objectMapper,
                         BlobService blobService) {
        this.figureRepository = figureRepository;
        this.pictureRepository = pictureRepository;
        this.blobService = blobService;
        this.objectMapper = objectMapper;
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

    public ResponseDto addFigure(String request) throws JsonProcessingException {
        Figure figure = objectMapper.readValue(request, Figure.class);
        figure = figureRepository.save(figure);

        List<Picture> pictures = figure.getPictures();
        if (pictures != null) {
            for (Picture picture : pictures) {
                Picture savedPicture = pictureRepository.findById(picture.getId())
                        .orElseThrow(() -> new NoSuchElementException("Picture not found"));
                savedPicture.setFigure(figure);
                pictureRepository.save(savedPicture);
            }
        }

        return objectMapper.convertValue(figure, ResponseDto.class);
    }

    public Picture savePicture(MultipartFile picture) throws IOException {
        var savedPicture = pictureRepository.save(new Picture());
        String id = savedPicture.getId();
        String blob = blobService.uploadBlob(id, picture);
        savedPicture.setFileType(picture.getContentType());
        savedPicture.setPictureUrl(
                "https://figureforgeapp.azurewebsites.net/public/pictures/" + id);
        pictureRepository.save(savedPicture);
        return savedPicture;
    }

    public byte[] getPicture(String id) {
        return blobService.downloadBlob(id);
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
