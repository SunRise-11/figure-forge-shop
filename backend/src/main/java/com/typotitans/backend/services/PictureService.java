package com.typotitans.backend.services;

import com.typotitans.backend.models.Figure;
import com.typotitans.backend.models.Picture;
import com.typotitans.backend.repositories.PictureRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Service
public class PictureService {
    private final PictureRepository pictureRepository;

    public PictureService(PictureRepository pictureRepository) {
        this.pictureRepository = pictureRepository;
    }

    public List<Picture> savePicturesAsBlobs(MultipartFile[] pictures, Figure figure) {

        return Arrays.stream(pictures).map(image -> {
            try {
                Picture picture = new Picture(image.getBytes(), figure);
                pictureRepository.save(picture);
                return picture;
            } catch (IOException exception) {
                System.out.println("Could not save image");
                return null;
            }
        }).toList();
    }
}
