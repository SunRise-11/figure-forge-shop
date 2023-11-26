export type Picture = {
  id: string;
  fileType: string;
  pictureUrl: string;
};

export type Toy = {
  id: number;
  name: string;
  origin: string;
  brand: string;
  price: number;
  width: number;
  height: number;
  rating: number;
  status: string;
  description: string;
  conditions: string;
  weight: number;
  length: number;
  pictures: Picture[];
};

export type Seller = {
  name: string;
  email: string;
};

export type Figure = {
  id:string;
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
};

export type CartItem = {
  id: number;
  quantity: number;
};
