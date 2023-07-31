import React from "react";
import { VStack, Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import heroImage from "../images/photo2.jpg";

const LandingSection = () => {
  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" spacing={8}>
      <VStack w="90%" py={16} alignItems="center">
        {/* Hero Image */}
        <Image src={heroImage} height="60vmin" alt="Hero Image" />

        {/* Hero Title */}
        <Heading as="h1" fontSize="6vw" textAlign="center" mt={8}>
          Unlimited Scrolling Experience with React Infinite Scroll
        </Heading>

        {/* Hero Text */}
        <Text fontSize="4vmin" textAlign="center" mt={8}>
          Immerse yourself in a seamless scrolling adventure with React Infinite
          Scroll. Embrace virtualization support, native 60 FPS animations, and
          unleash the full power of JavaScript to elevate your user experience
          to new heights. Welcome to the future of scrolling. 🔥️
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
