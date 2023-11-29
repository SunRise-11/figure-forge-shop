import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import AboutImage from '../../../../public/hero-about-image.png';

const LeftPhotoBanner = () => {
  return (
    <div className="bg-accent flex flex-col sm:flex-row justify-between items-center my-10 mt-20">
      <Image
        className=" brightness-75"
        src={AboutImage.src}
        width={400}
        height={400}
        alt="Hero Image"
      />
      <div className="flex flex-col sm:items-start sm:justify-center py-4 gap-10">
        <h1 className=" text-2xl font-bold text-background">ABOUT US</h1>
        <p className="text-background">
          At Figure Forge, our story is a tapestry woven with threads of passion
          for action figures and an unwavering commitment to the collector
          community. Nestled in the heart of the city, our shop stands as a
          haven for enthusiasts, both seasoned collectors and those just
          starting their journey. It all began with a shared love for these
          miniature heroes and characters, where the dream was to create a space
          that mirrored the nostalgia and joy these figures bring. Founded by a
          group of collectors, Figure Forge emerged from the desire to curate a
          haven that understood the emotional connections we forge with our
          action figures.
        </p>
        <Link href="/about">
          <p className=" text-primary underline">Read more</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftPhotoBanner;
