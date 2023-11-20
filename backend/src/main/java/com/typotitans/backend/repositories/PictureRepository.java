package com.typotitans.backend.repositories;

import com.typotitans.backend.models.Picture;
import org.springframework.data.repository.ListCrudRepository;

public interface PictureRepository extends ListCrudRepository<Picture, String> {
}
