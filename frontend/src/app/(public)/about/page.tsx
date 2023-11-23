import React from "react";
import Banner from "../../components/public/Banner";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Banner
        name="ABOUT US"
        imageSource="https://onepiecetreasuregk.net/cdn/shop/collections/6bb4c691b68569b75fa51528eabbd39_2260x.jpg?v=1660340062"
      />
      <div className="my-10">
        <p className="text-text">
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
      </div>
      <div className="bg-background w-full h-100 flex flex-row justify-between my-10 text-text">
        <div className="flex flex-col py-4 justify-around p-4">
          <h1 className=" text-2xl font-bold underline ">RATING SYSTEM</h1>
          <h2 className=" font-semibold mt-5">
            ⭐⭐⭐⭐⭐ - 5 Stars: Excellent (Sealed in Box)
          </h2>
          <p>
            A five-star rating for an action figure signifies an exceptional
            collectible. This figure exceeds all expectations, showcasing
            outstanding quality, meticulous design, and an incredibly accurate
            representation of the character.
          </p>
          <h2 className=" font-semibold mt-5">
            ⭐⭐⭐⭐ - 4 Stars: Very Good (Sealed in Box with box damage)
          </h2>
          <p>
            A four-star rating for an action figure suggests that it surpasses
            the average expectations of a collector. The figure exhibits a high
            level of quality, good design, and accurate representation of the
            character. It might have some minor flaws or room for improvement
            but overall offers a positive experience.
          </p>
          <h2 className=" font-semibold mt-5">
            ⭐⭐⭐ - 3 Stars: Good (Back In Box)
          </h2>
          <p>
            A three-star rating for an action figure implies that it meets the
            basic expectations of an average collector. It is a decent figure
            with acceptable quality and design, providing a satisfactory
            representation of the character.
          </p>
          <h2 className=" font-semibold mt-5">⭐⭐ - 2 Stars: Fair</h2>
          <p>
            A two-star rating for an action figure suggests that it falls below
            average expectations. The figure might have several noticeable
            flaws, such as subpar quality, limited articulation, or poor design.
          </p>
          <h2 className=" font-semibold mt-5">⭐ - 1 Stars: Poor</h2>
          <p>
            A one-star rating for an action figure indicates significant
            shortcomings and dissatisfaction. This figure fails to meet even the
            most basic expectations of a collector. It might possess severe
            quality issues, poor design, lack of accuracy to the character, or
            limited functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
