"use client";
import { useState } from "react";
import axios from "axios"; 
import Link from "next/link";
import Image from "next/image"; 
import HeroImage from "../../../public/wink-studio-luffy-nika-lightning-resin-statue003.jpg";
import CarouselHomePage from "./components/public/Carousel";

 
export default function HomePage() {
  // const [test, setTest] = useState();

  // const getTest = async () => {
  //   const response = await axios.get(
  //     "https://figure-forge-shop-app.azurewebsites.net/client"
  //   );
  //   setTest(await response.data);
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarouselHomePage />
                <div className="bg-black w-full h-100 flex flex-row justify-between my-10 mt-20">
                    <div className="flex flex-col py-4 gap-10">
                    <Link href="/sell-figure">
                        <h1 className=" text-2xl font-bold underline">
                        WHY SELLING WITH US
                        </h1>
                    </Link>
                    <p>
                        Welcome to Figure Forge, the ultimate destination for collectors and
                        aficionados passionate about action figures. Our store encapsulates
                        the spirit of preservation and celebration of iconic figures from
                        various universes. Within our vibrant displays lie treasures waiting
                        to be discovered. Our dedicated team understands the sentimental
                        value each figure holds. As a former collector myself, I experienced
                        firsthand the seamless process of parting ways with a cherished
                        action figure.
                    </p>
                    </div>
                    <Image
                    className=" brightness-75"
                    src="https://www.resingrounds.com/cdn/shop/products/1_5c3ea413-0758-4032-b03d-48bf14ca44f9_580x.jpg?v=1638325481"
                    width={400}
                    height={400}
                    alt="Hero Image"
                    />
                </div>
                <div className="bg-metal w-full h-100 flex flex-row justify-between my-10">
                    <Image
                    className=" brightness-75"
                    src="https://tsumeart-1d733.kxcdn.com/web/image/167936-9f6cb5f6/naruto_montage_intro%20%281%29.png"
                    width={400}
                    height={400}
                    alt="Hero Image"
                    />
                    <div className="flex flex-col py-4 justify-around"> 
                        <h1 className=" text-2xl font-bold text-midnight">
                            ABOUT US
                        </h1> 
                        <p className="text-midnight">
                            Welcome to Figure Forge, the ultimate destination for collectors and
                            aficionados passionate about action figures. Our store encapsulates
                            the spirit of preservation and celebration of iconic figures from
                            various universes. Within our vibrant displays lie treasures waiting
                            to be discovered. Our dedicated team understands the sentimental
                            value each figure holds. As a former collector myself, I experienced
                            firsthand the seamless process of parting ways with a cherished
                            action figure.
                        </p>
                        <Link href="/about">
                            <p className=" text-midnight underline">
                            Read more
                            </p>
                        </Link>
                    </div>
                </div> 
      <h1></h1>
      {/* <button onClick={getTest}>test 1</button>
      {test && <h1>{test}</h1>} */}
    </main>
  );
}
