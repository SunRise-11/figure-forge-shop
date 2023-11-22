package com.typotitans.backend.services;

import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.models.FigureBuilder;
import com.typotitans.backend.repositories.FigureRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class FigureServiceTest {

    @InjectMocks
    FigureService service;

    @Mock
    FigureRepository repo;

    private final FigureDto MOCK_DTO = new FigureDto("1", "Peter Pan", "Boy who never grows up",
            "Cpt. Hook", 0, "Neverland", 0, 0, 0, 0, null);
    private final Figure MOCK_FIGURE_DTO = new FigureBuilder()
            .setName("Peter Pan")
            .setBrand("Cpt. Hook")
            .setDescription("Boy who never grows up")
            .setOrigin("Neverland")
            .setPrice(1337)
            .createFigure();

    private final Figure MOCK_FIGURE_1 = new FigureBuilder()
            .setName("Minato Namikaze")
            .setBrand("Tsume")
            .setOrigin("Sweden")
            .setDescription(
                    "Minato is the creator of the Rasengan technique, intended to protect Kushina.")
            .setHeight(36)
            .setLength(32)
            .setWidth(18)
            .setWeight(700)
            .setPrice(374.18)
            .createFigure();

    private final Figure MOCK_FIGURE_2 = new FigureBuilder()
            .setName("Lord Voldemort")
            .setBrand("Tsume")
            .setOrigin("Luxenbourg")
            .setDescription(
                    "This statue represents Lord Voldermort in the final battle agains Harry Potter.")
            .setHeight(36)
            .setLength(32)
            .setWidth(18)
            .setWeight(700)
            .setPrice(399)
            .createFigure();

    private final List<Figure> MOCK_FIGURE_LIST = Arrays.asList(
            MOCK_FIGURE_1,
            MOCK_FIGURE_2
    );

    @Test
    void shouldFindAllFigures() {
        when(repo.findAll()).thenReturn(MOCK_FIGURE_LIST);
        List<Figure> figureList = service.getAllFigures();
        assertEquals(2, figureList.size());
        verify(repo, times(1)).findAll();
    }

    @Test
    void shouldFindOneFigure() {
        when(repo.findById(anyString())).thenReturn(Optional.ofNullable(MOCK_FIGURE_2));
        Figure figure = service.getFigure("some-id-string");
        assertEquals("Lord Voldemort", figure.getName());
        verify(repo, times(1)).findById(anyString());
    }

//    @Test
//    void shouldAddFigure() {
//
//        Figure figure = service.addFigure(MOCK_DTO, null);
//        assertEquals(MOCK_FIGURE_DTO.getName(), figure.getName());
//        assertEquals(MOCK_FIGURE_DTO.getDescription(), figure.getDescription());
//        assertEquals(MOCK_FIGURE_DTO.getOrigin(), figure.getOrigin());
//    }
}
