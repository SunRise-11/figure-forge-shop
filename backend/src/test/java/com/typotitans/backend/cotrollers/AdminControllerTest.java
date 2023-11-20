package com.typotitans.backend.cotrollers;

import com.typotitans.backend.controllers.AdminController;
import com.typotitans.backend.services.FigureService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(AdminController.class)
class AdminControllerTest {

    @MockBean
    private FigureService figureService;

    @Autowired
    private MockMvc mvc;

    @Test
    void shouldDeleteFigure() throws Exception {
        mvc.perform(delete("/admin/figures/1"))
                .andExpect(status().isNoContent());
    }


}
