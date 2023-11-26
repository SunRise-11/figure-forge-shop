import { Figure, FigureDto } from "@/app/types/types";

const PUBLIC_URI = "https://figureforgeapp.azurewebsites.net/public/figures";
const ADMIN_URI = "https://figureforgeapp.azurewebsites.net/admin/figures";

export const httpGetAllFigures = async () => {
  const response = await fetch(PUBLIC_URI);
  return response.json();
};

export const httpPostFigure = async (figure: Figure) => {
  const { pictures, ...figureDetails } = figure;
  const dto: FigureDto = { ...figureDetails };
  const formData = new FormData();
  formData.append("figureDetails", JSON.stringify(dto));

  Object.values(figure.pictures).forEach((picture) =>
    formData.append("pictures", picture)
  );

  console.log(formData);

  return await fetch(PUBLIC_URI, {
    method: "POST",
    body: formData,
  });
};

export const httpPutFigure = async (figure: Figure) => {
  const { pictures, ...figureDetails } = figure;
  const dto: FigureDto = { ...figureDetails };
  const formData = new FormData();
  formData.append("figureDetails", JSON.stringify(dto));

  Object.values(figure.pictures).forEach((picture) =>
    formData.append("pictures", picture)
  );

  console.log(formData);

  return await fetch(ADMIN_URI, {
    method: "PUT",
    body: formData,
  });
};

export const httpDeleteFigure = async (id: Number) => {
  return await fetch(`${PUBLIC_URI}/${id}`, {
    method: "DELETE",
  });
};
