import { useState, useEffect } from 'react';
import { preloadAssets, getAllImagePaths, getAllFontPaths, PreloadResult } from '../utils/preloader';

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<PreloadResult | null>(null);

  useEffect(() => {
    const startPreloading = async () => {
      const images = getAllImagePaths();
      const fonts = getAllFontPaths();
      
      try {
        const preloadResult = await preloadAssets({
          images,
          fonts,
          timeout: 15000
        });

        setResult(preloadResult);
        
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        
      } catch (error) {
        console.error('Preloading failed:', error);
        setIsLoading(false);
      }
    };

    startPreloading();
  }, []);

  return {
    isLoading,
    result
  };
};