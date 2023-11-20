package com.typotitans.backend.repositories;

import com.typotitans.backend.models.Figure;
import org.springframework.data.repository.ListCrudRepository;

public interface FigureRepository extends ListCrudRepository<Figure, String> {
}
