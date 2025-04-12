'use client';
import React, { createContext, useContext, useState } from 'react';

interface ModelContextValue {
  selectedModelId: string;
  setSelectedModelId: (modelId: string) => void;
}

const ModelContext = createContext<ModelContextValue | undefined>(undefined);

// Define props interface including initialModelId
interface ModelProviderProps {
  children: React.ReactNode;
  initialModelId?: string; // Make initialModelId optional
}

export const ModelProvider: React.FC<ModelProviderProps> = ({
  children,
  initialModelId, // Destructure initialModelId from props
}) => {
  // Set your default model ID as needed
  // Initialize state directly with the prop or a default
  const [selectedModelId, setSelectedModelId] = useState<string>(
    initialModelId || 'default-model',
  );
  return (
    <ModelContext.Provider value={{ selectedModelId, setSelectedModelId }}>
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = (): ModelContextValue => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
};
