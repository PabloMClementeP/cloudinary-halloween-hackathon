'use client'

import { useState, ChangeEvent } from 'react'
import { Ghost, Skull } from "lucide-react"
import { Container, FormWrapper, ImagePreviewWrapper, Overlay, PreviewContainer, PreviewImage, StyledButton, StyledInput, StyledLabel, Title } from './style'
import Link from 'next/link'
import { useStory } from '@/context/StoryContext'



const Start = () => {
  const { name, setName, image, setImage, theme, setTheme } = useStory()
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleStoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value)
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setImagePreview(result)
        setImage(result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Title>
          <Ghost style={{ marginRight: '0.5rem' }} />
          Scary Letter
          <Skull style={{ marginLeft: '0.5rem' }} />
        </Title>
        
        <div>
          <StyledLabel htmlFor="name">A quien va dedicado:</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            placeholder="ej: Mamá, hermana, mundo..."
            value={name}
            onChange={handleNameChange}
          />
        </div>


        <div>
          <StyledLabel htmlFor="name">Sobre que es la historia:</StyledLabel>
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
          <StyledInput
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        
        {imagePreview && (
          <ImagePreviewWrapper>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#f97316', marginBottom: '0.5rem' }}>
              Image Preview
            </h2>
            <PreviewContainer>
              <PreviewImage src={imagePreview} alt="Preview" width={0} height={0}/>
              <Overlay />
            </PreviewContainer>
          </ImagePreviewWrapper>
        )}
        
        <Link href={'/letter'}>
          <StyledButton>
            Generar carta
          </StyledButton>
        </Link>
      </FormWrapper>
    </Container>
  )
}

export default Start;