package com.typotitans.backend.mocking;

import com.typotitans.backend.models.Figure;
import com.typotitans.backend.models.Picture;
import com.typotitans.backend.repositories.FigureRepository;
import com.typotitans.backend.repositories.PictureRepository;
import com.typotitans.backend.services.BlobService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@Profile("dev")
public class DatabaseMocker implements ApplicationRunner {

    private final FigureRepository figureRepository;
    private final PictureRepository pictureRepository;
    private final BlobService blobService;

    public DatabaseMocker(FigureRepository figureRepository, PictureRepository pictureRepository,
                          BlobService blobService) {
        this.figureRepository = figureRepository;
        this.pictureRepository = pictureRepository;
        this.blobService = blobService;
    }


    public void run(ApplicationArguments args) {
        SeedFromCsv();

    }

    private List<Picture> seedPictures(int index, Figure figure) {
        List<Picture> pictures = new ArrayList<>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader(
                    ResourceUtils.getFile("src/main/resources/data/mock-pictures.csv")));

            String line;
            boolean isFirstLine = true;
            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false;
                    continue;
                }
                String[] data = line.split(",");
                if (Integer.parseInt(data[1]) == index) {
                    Picture picture = new Picture();
                    pictureRepository.save(picture);
                    picture.setFigure(figure);
                    var blob = blobService.uploadBlobFromUrl(picture.getId(), data[2]);
                    picture.setPictureUrl(blob);
                    pictureRepository.save(picture);
                    pictures.add(picture);
                }
            }
            reader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return pictures;
    }

    private void SeedFromCsv() {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(
                    ResourceUtils.getFile("src/main/resources/data/mock-data.csv")));

            String line;
            int index = 1;
            boolean isFirstLine = true;
            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false;
                    continue;
                }
                String[] data = line.split(",");
                Figure figure = new Figure();
                figure.setName(data[1]);
                figure.setOrigin(data[2]);
                figure.setBrand(data[3]);
                figure.setPrice(Double.parseDouble(data[4]));
                figure.setWidth(Integer.parseInt(data[5]));
                figure.setLength(Integer.parseInt(data[6]));
                figure.setHeight(Integer.parseInt(data[7]));
                figure.setWeight(Integer.parseInt(data[8]));

                String description = String.join(" ", Arrays.copyOfRange(data, 9, data.length));
                description = description.replace("\"", "");

                figure.setDescription(description);
                figureRepository.save(figure);
                figure.setPictures(seedPictures(index, figure));

                figureRepository.save(figure);

                index++;
            }
            reader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
