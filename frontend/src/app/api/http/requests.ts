import { AdminPutDTO, Figure, FigureDto, Picture } from "@/app/types/types";

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
  return await fetch(PUBLIC_URI + "/figures", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(figure),
  });
};

export const httpPutFigure = async (figure: AdminPutDTO,id: string) => {
  return await fetch(`${ADMIN_URI}/figures/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(figure),
  });
};

export const httpDeleteFigure = async (id: string) => {
  return await fetch(`${ADMIN_URI}/figures/${id}`, {
    method: "DELETE",
  });
};
