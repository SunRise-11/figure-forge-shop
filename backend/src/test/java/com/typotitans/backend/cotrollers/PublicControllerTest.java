package com.typotitans.backend.cotrollers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.typotitans.backend.controllers.PublicController;
import com.typotitans.backend.dtos.FigureDto;
import com.typotitans.backend.models.Figure;
import com.typotitans.backend.services.FigureService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(PublicController.class)
class PublicControllerTest {

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private FigureService figureService;

    @Autowired
    private MockMvc mvc;

    private final FigureDto MOCK_DTO = new FigureDto("Peter Pan", "Neverland", "Cpt. Hook", 0, 0, 0,
            0, null, 0, null);
    private final Figure MOCK_FIGURE_DTO = new Figure("Peter Pan", "Neverland", "Cpt. Hook", 0, 0,
            0, 0, 0, null);


    private final Figure MOCK_FIGURE_1 = new Figure("Minato Namikaze", "Sweden", "Tsume", 374.18,
            18, 41, 36, 700,
            "Minato is the creator of the Rasengan technique, intended to protect Kushina.");
    private final Figure MOCK_FIGURE_2 = new Figure("Lord Voldemort", "Luxenbourg", "Tsume", 399.00,
            18, 36, 32, null,
            "This statue represents Lord Voldermort in the final battle agains Harry Potter.");
    private final List<Figure> MOCK_FIGURE_LIST = Arrays.asList(
            MOCK_FIGURE_1,
            MOCK_FIGURE_2
    );

    @BeforeEach
    void setUp() throws Exception {
        when(figureService.getAllFigures()).thenReturn(MOCK_FIGURE_LIST);
        when(figureService.getFigure(anyString())).thenReturn(MOCK_FIGURE_1);
        when(figureService.addFigure(MOCK_DTO)).thenReturn(MOCK_FIGURE_DTO);
    }

    @Test
    void shouldReturnListOfFigures() throws Exception {
        mvc.perform(get("/public/figures"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(MOCK_FIGURE_LIST.size())));
    }

    @Test
    void shouldReturnFigure() throws Exception {
        mvc.perform(get("/public/figures/1"))
                .andExpect(status().isOk());
    }

    @Test
    void shouldReturnMockedFigureData() throws Exception {
        mvc.perform(get("/public/figures/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", Matchers.is(MOCK_FIGURE_1.getName())))
                .andExpect(jsonPath("$.weight", Matchers.is(MOCK_FIGURE_1.getWeight())));
    }

    @Test
    void shouldCreateFigure() throws Exception {
        mvc.perform(post("/public/figures")
                        .content(objectMapper.writeValueAsString(MOCK_DTO))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    @Test
    void shouldReturnNewFigure() throws Exception {
        mvc.perform(post("/public/figures")
                        .content(objectMapper.writeValueAsString(MOCK_DTO))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", Matchers.is(MOCK_FIGURE_DTO.getName())))
                .andExpect(jsonPath("$.price", Matchers.is(MOCK_FIGURE_DTO.getPrice())));
    }

}
