// LoadingContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  loading: boolean;
  setLoadingState: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const setLoadingState: React.Dispatch<React.SetStateAction<boolean>> = newState => {
    setLoading(newState);
  };

  const value: LoadingContextType = {
    loading,
    setLoadingState,
  };

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
