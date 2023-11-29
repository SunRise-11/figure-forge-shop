import React from "react";
import Banner from "../../components/public/Banner";
import AboutImage from "../../../../public/about-image.webp";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Banner name="ABOUT US" imageSource={AboutImage.src} />
      <div className="my-10 p-4">
        <p className="text-text">
          Hey there, fellow collectors and enthusiasts! Welcome to Figure
          Forge—the ultimate haven for action figure aficionados like us. At
          Figure Forge, we're not just a store; we're a vibrant community where
          passion for action figures thrives. Picture this: we host regular
          events and workshops where we come together to trade, share stories,
          and dive deep into our love for these iconic figures. But that's not
          all! We've got artisans skilled in restoring worn-out figures to their
          former glory. We understand the sentimental value behind each piece,
          and our restoration services aim to breathe new life into your beloved
          collectibles. What sets us apart? Our adoption program! If you've got
          figures seeking new homes, we're here to help. Let's find them a place
          where they'll be cherished just as much as they were with you. And
          here's the best part: our digital platform connects collectors
          globally. You can browse, buy, and trade figures from anywhere, making
          our community a worldwide network of enthusiasts. Being a member with
          us comes with perks—early access, exclusive discounts, and invites to
          our VIP events. It's like joining an exclusive club dedicated to our
          shared passion. But authenticity is our priority. We've got experts
          who authenticate figures, ensuring that every purchase from us is the
          real deal. And hey, don't miss out on our podcast! It's where we share
          stories, insights, and the latest buzz in the action figure world.
          It's like tuning in to a hangout spot designed just for us figure
          fanatics. So, fellow collectors, join us at Figure Forge, where our
          love for action figures unites us all!
          
          
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
