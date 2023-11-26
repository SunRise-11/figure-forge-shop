import React from "react";
import Banner from "@/app/components/public/Banner";
import Catalog from "@/app/components/public/Catalog";
import ShopImage from "../../../../public/shop-image.webp";

const ShopPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner name="OUR COLLECTION" imageSource={ShopImage.src} />
      <Catalog />
    </div>
  );
};

export default ShopPage;
