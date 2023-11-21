type Seller = {
    name: string;
    email: string;
};

type Figure = {
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
