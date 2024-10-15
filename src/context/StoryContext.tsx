'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface StoryContextType {
  name: string;
  setName: (name: string) => void;
  image: string | null;
  setImage: (image: string | null) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export const StoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [theme, setTheme] = useState('');

  return (
    <StoryContext.Provider value={{ name, setName, image, setImage, theme, setTheme }}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => {
  const context = useContext(StoryContext);
  if (context === undefined) {
    throw new Error('useStory must be used within a StoryProvider');
  }
  return context;
};