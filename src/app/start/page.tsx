"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { Ghost, Skull } from "lucide-react";
import { useStory } from "@/context/StoryContext";
import {
  Container,
  FormWrapper,
  ImagePreviewWrapper,
  Overlay,
  PreviewContainer,
  StyledButton,
  StyledInput,
  StyledLabel,
  Title,
} from "./style";
import { CldUploadWidget, CldImage } from "next-cloudinary";

const Start = () => {
  const { name, setName, setImage, theme, setTheme } = useStory();
  const [ imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleStoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };
  

  return (
    <Container>
      <FormWrapper>
        <Title>
          <Ghost style={{ marginRight: "0.5rem" }} />
          Scary Letter
          <Skull style={{ marginLeft: "0.5rem" }} />
        </Title>

        <div>
          <StyledLabel htmlFor="name">A quien dedicas la carta:</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            placeholder="ej: Mamá, hermana, mundo..."
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div>
          <StyledLabel htmlFor="name">Describe la situación:</StyledLabel>
          <StyledInput
            type="text"
            id="story"
            placeholder="ej: una fiesta de amigos..."
            value={theme}
            onChange={handleStoryChange}
          />
        </div>

        <div>
          <StyledLabel htmlFor="image-upload">Selecciona la imágen</StyledLabel>
          <CldUploadWidget
            uploadPreset="unsigned-media"
            options={{
              sources: ["local"],
              multiple: false,
              maxFiles: 1,
              language: "es",
              text: {
                es: {
                  or: "O",
      
                  menu: {
                    files: "Subir desde tu dispositivo",
                  },
                  local: {
                    browse: "Seleccionar",
                    dd_title_single: "Arrastra tu imagen aquí",
                  },
                },
              },
            }}
            onSuccess={(result : any) => {
              setImageSize({
                width: result?.info?.width,
                height: result?.info?.height,
              });
              setImage(result?.info?.public_id);
              setImagePreview(result?.info?.url);
            }}
          >
            {({ open }) => {
              return (
                <StyledButton onClick={() => open()}>
                  Selecciona la imagen
                </StyledButton>
              );
            }}
          </CldUploadWidget>
        </div>

        {imagePreview && (
          <ImagePreviewWrapper>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#f97316",
                marginBottom: "0.5rem",
              }}
            >
              Image Preview
            </h2>
            <PreviewContainer>
              <CldImage
                width={imageSize.width}
                height={imageSize.height}
                src={imagePreview}
                sizes="100vw"
                alt="Description of my image"
                style={{ width: "100%", height: "auto" }}
              />
              <Overlay />
            </PreviewContainer>
          </ImagePreviewWrapper>
        )}

        <Link href={"/letter"}>
          <StyledButton style={{ marginTop: "2rem" }}>
            Generar carta
          </StyledButton>
        </Link>
      </FormWrapper>
    </Container>
  );
};

export default Start;
