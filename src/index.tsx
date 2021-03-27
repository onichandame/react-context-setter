import { useState, createContext } from 'react';

export const useContextWithSetter = function<T>(defaultVal: T) {
  const state = useState<T>(defaultVal);
  const context = createContext<typeof state>(state);
  return context;
};
