import React from "react";
import Banner from "@/app/components/public/Banner";
import Catalog from "@/app/components/public/Catalog";

const ShopPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner
        name="OUR COLLECTION"
        imageSource="https://onepiecetreasuregk.net/cdn/shop/collections/e90e0b70e19e1bca6bfb4b47732e33f_2260x.jpg?v=1660340100"
      />
      <Catalog />
    </div>
  );
};

export default ShopPage;
