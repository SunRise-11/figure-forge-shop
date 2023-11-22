import { Figure, FigureDto } from "@/types";

const API_URI = "http://localhost:8080/public/figures";

export const httpGetAllFigures = async () => {
    const response = await fetch(API_URI);
    return response.json();
}

export const httpPostFigure = async (figure:Figure) => {
    const { pictures, ...figureDetails } = figure;
    const dto: FigureDto = { ...figureDetails };
    const formData = new FormData();
    formData.append('figureDetails', JSON.stringify(dto))

    Object.values(figure.pictures).forEach(picture => formData.append('pictures', picture))

    console.log(formData)

    return await fetch(API_URI, {
        method: "POST",
        body: formData
    })
}

export const httpDeleteFigure = async (id: Number) => {
    return await fetch(`${API_URI}/${id}`,{
        method:'DELETE'
    });
}