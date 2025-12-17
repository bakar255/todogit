'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  //   initial state
  const [value, setValue] = useState<T>(initialValue);
  
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (error) {
      console.log('Erreur lecture localStorage:', error);
    }
  }, [key]);
  
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('Erreur écriture localStorage:', error);
    }
  }, [key, value]);
  
  return [value, setValue] as const;
}