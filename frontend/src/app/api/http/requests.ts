import { Figure, FigureDto, Picture } from "@/app/types/types";

const PUBLIC_URI = "https://figureforgeapp.azurewebsites.net/public";
const ADMIN_URI = "https://figureforgeapp.azurewebsites.net/admin";
// const PUBLIC_URI = 'http://localhost:8080/public';
// const ADMIN_URI = 'http://localhost:8080/admin';

export const httpGetAllFigures = async () => {
  const response = await fetch(PUBLIC_URI + "/figures");
  return response.json();
};

export const httpPostPicture = async (picture: File) => {
  const formData = new FormData();

  formData.append("picture", picture);

  const response = await fetch(PUBLIC_URI + "/pictures", {
    method: "POST",
    body: formData,
  });
  const pictureResponse: Picture = await response.json();
  return pictureResponse;
};

export const httpPostFigure = async (figure: FigureDto) => {
  const json = JSON.stringify(figure);

  return await fetch(PUBLIC_URI + "/figures", {
    method: "POST",
    body: json,
  });
};

export const httpPutFigure = async (figure: FigureDto) => {
  const json = JSON.stringify(figure);

  return await fetch(ADMIN_URI + "/figures", {
    method: "PUT",
    body: json,
  });
};

export const httpDeleteFigure = async (id: String) => {
  return await fetch(`${PUBLIC_URI}/figures/${id}`, {
    method: "DELETE",
  });
};
