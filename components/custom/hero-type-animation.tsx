"use client";
import { TypeAnimation } from "react-type-animation";

const HeroTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "from Sumbawa, Indonesia",
        2000,
        "Frontend Web Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default HeroTypeAnimation;
