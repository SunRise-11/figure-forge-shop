export type Seller = {
  name: string;
  email: string;
};

export type Figure = {
  id: string;
  name: string;
  origin: string;
  brand: string;
  width: number;
  length: number;
  height: number;
  weight: number;
  description: string;
  price: number;
  rating: number;
  seller: Seller;
  status: String;
  pictures: [];
};

export type FigureDto = {
  name: string;
  origin: string;
  brand: string;
  width: number;
  length: number;
  height: number;
  weight: number;
  description: string;
  price: number;
  rating: number;
  seller: Seller;
  status: String;
  pictures: Picture[];
};

export type Picture = {
  id: string;
  fileType: string;
  pictureUrl: string;
  previewUrl: string;
}
