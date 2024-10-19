import { useEffect, useState } from "react";
import { IMAGE_PROMPT, STORY_PROMPT } from "@/constants/prompt";
import { generateLetter } from "@/services/get-letter";
import { generateImageWithPrompt } from "@/services/generate-image";

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

        const myImage = await generateImageWithPrompt(image, image_prompt);
                
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
