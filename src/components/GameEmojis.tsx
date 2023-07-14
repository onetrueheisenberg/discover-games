import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import a8 from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const GameEmojis = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: a8,
      alt: "alright",
      boxSize: "25px",
    },
    4: {
      src: thumbsUp,
      alt: "recommended",
      boxSize: "25px",
    },
    5: {
      src: bullsEye,
      alt: "exceptional",
      boxSize: "35px",
    },
  };
  return <Image marginTop={2} {...emojiMap[rating]} />;
};

export default GameEmojis;
