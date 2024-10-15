import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7a341a;
  padding: 1rem;
`;

export const FormWrapper = styled.div`
  background-color: black;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 28rem;
  width: 100%;
  border: 2px solid #f97316;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: #f97316;
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  color: #f97316;
  display: block;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: #fed7aa;
  color: black;
  border-radius: 0.5rem;
  border: none;
  margin-bottom: 1rem;
  &::placeholder {
    color: #6b7280;
  }

  &[type="file"] {
    padding: 0;
    color: #000;
    background-color: #fed7aa;

    &::-webkit-file-upload-button {
      background-color: #f97316;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
`;

export const ImagePreviewWrapper = styled.div`
  margin-top: 1rem;
`;

export const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 2px solid #f97316;
`;

export const PreviewImage = styled(Image)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #f97316;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fb923c;
  }
`;