import GetInTouch from "@/components/Home/GetInTouch";
import HeroSection from "@/components/Home/HeroSection";
import MeetAbbey from "@/components/Home/MeetAbbey";
import Offer from "@/components/Home/Offer";
import React from "react";

function Home() {
  return (
    <main>
      <HeroSection />
      <MeetAbbey />
      <Offer />
      <GetInTouch />
    </main>
  );
}

export default Home;
