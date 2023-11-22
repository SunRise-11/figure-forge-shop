package com.typotitans.backend.repositories;

import com.typotitans.backend.models.Picture;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface PictureRepository extends ListCrudRepository<Picture, String> {
    List<Picture> findAllByFigureId(String figureId);

}
