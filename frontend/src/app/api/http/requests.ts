import { Figure } from "@/types";

const API_URI = "http://localhost:8080/public/figures";

export const httpGetAllFigures = async () => {
    const response = await fetch(API_URI);
    return response.json();
}

export const httpPostFigure = async (figure:Figure) => {
    return await fetch(API_URI, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(figure)
    })
}

export const httpDeleteFigure = async (id: Number) => {
    return await fetch(`${API_URI}/${id}`,{
        method:'DELETE'
    });
}