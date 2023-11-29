"use client";
import RightPhotoBanner from "../components/public/RightPhotoBanner";
import LeftPhotoBanner from "../components/public/LeftPhotoBanner";
import Image from "next/image";

import HeroImage from "../../../public/hero-image.jpg";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-0">
      <div className="w-full relative">
        <Image
          className=" brightness-75"
          src={HeroImage}
          width={1600}
          height={900}
          alt="Hero Image"
        />
        <h1 className="w-full text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-4/4 text-white text-4xl font-bold lg:text-7xl">
          FIGURE FORGE
        </h1>
        <p className="w-full text-center absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-4/4 text-white text-1xl lg:text-4xl lg:px-32">
          Empower Your Collection: Figure Forge, Where Legends Find New Homes
        </p>
        <Link href="/figures">
          <p className="lg:text-2xl absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-4/4 lg:inline-flex lg:w-auto px-3 py-2 rounded text-text bg-primary font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-text hover:bg-secondary hover:transition-all">
            Our collection
          </p>
        </Link>
      </div>
      <RightPhotoBanner />
      <LeftPhotoBanner />
    </main>
  );
}
