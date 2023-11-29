export type Toy = {
  id: string;
  name: string;
  origin: string;
  brand: string;
  price: number;
  width: number;
  height: number;
  rating: number;
  status: string;
  description: string;
  condition: string;
  weight: number;
  length: number;
  pictures: Picture[];
};

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
  pictures: File[];
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

export type CartItem = {
  id: string;
  quantity: number;
};

export type Picture = {
  id: string;
  fileType: string;
  pictureUrl: string;
};

export type AdminPutDTO = {
  name: string;
  description: string;
  condition: string;
  brand: string;
  price: number;
  origin: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  rating: number;
  status: string;
}
