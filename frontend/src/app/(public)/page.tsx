"use client";
import CarouselHomePage from "../components/public/Carousel";
import RightPhotoBanner from "../components/public/RightPhotoBanner";
import LeftPhotoBanner from "../components/public/LeftPhotoBanner";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-0">
      <CarouselHomePage />
      <RightPhotoBanner />
      <LeftPhotoBanner />
    </main>
  );
}
