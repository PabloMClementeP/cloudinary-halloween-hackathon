import { useEffect, useState } from "react";
import { IMAGE_PROMPT, STORY_PROMPT } from "@/constants/prompt";
import { generateLetter } from "@/services/get-letter";
import { getCldImageUrl } from "next-cloudinary";

const useLetterImage = (name: string, theme: string, image: string, setImageUrl: (url: string) => void) => {
  const [letter, setLetter] = useState<any>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const fetchLetterAndImage = async () => {
      try {
        setImageUrl("");
        const prompt = STORY_PROMPT.replace("{name}", name).replace("{theme}", theme);
        
        const letter = await generateLetter(prompt);
        const parsedLetter = JSON.parse(letter || "");
        setLetter(parsedLetter);
        
        const encodedBackground = encodeURIComponent(parsedLetter?.resumen);
        const image_prompt = IMAGE_PROMPT.replace("{story}", encodedBackground );

        const myImage = getCldImageUrl({
          src: image,
          width: 300,
          height: 300,
          replaceBackground: image_prompt,
        });

        console.log(myImage);
        

        setImageUrl(myImage);
      } catch (error) {
        console.error("Error generating letter or image:", error);
      }
    };

    fetchLetterAndImage();
  }, [name, theme, image, setImageUrl]);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return { letter, isImageLoading, handleImageLoad };
};

export default useLetterImage;
