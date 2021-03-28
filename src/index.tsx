import { createContext } from 'react';

type ContextWithSetter<T> = [
  value: T,
  setValue: (data: T) => void
];

export const createContextWithSetter = function<T>(defaultVal: T) {
  const context = createContext<ContextWithSetter<T>>([
    defaultVal,
    () => {},
  ]);
  return context;
};
