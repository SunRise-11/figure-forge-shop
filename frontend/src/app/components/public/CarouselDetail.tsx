import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { Picture } from '@/app/types/types';
import Image from 'next/image';

type Props = {
  pictures: Picture[];
};

const CarouselDetail = ({ pictures }: Props) => {
  return (
    <Carousel className="rounded-xl z-10 h-[calc(100vh-20rem)]" >
      {pictures?.map((picture, index) => {
        return (
          <Image
            key={index}
            src={picture.pictureUrl}
            width={200}
            height={200}
            alt="image 1"
            className="h-full w-full object-contain"
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselDetail;
