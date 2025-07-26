import { useState, useEffect, useCallback } from 'react';

export const useCarouselDuplicates = () => {
  const [duplicateCount, setDuplicateCount] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Función para calcular cuántos duplicados necesitamos
  const calculateDuplicateCount = useCallback(() => {
    // Obtener el ancho de la tarjeta basado en el viewport
    let cardWidth;
    let gap;
    
    if (windowWidth > 1500) {
      cardWidth = 612;
      gap = 30;
    } else if (windowWidth > 1000) {
      cardWidth = 459;
      gap = 30;
    } else if (windowWidth > 768) {
      cardWidth = 306;
      gap = 20;
    } else {
      cardWidth = 306;
      gap = 15;
    }
    
    const totalCardWidth = cardWidth + gap;
    const viewportWidth = windowWidth;
    
    // Calculamos cuántas tarjetas caben en el viewport
    const cardsPerViewport = Math.ceil(viewportWidth / totalCardWidth);
    
    // Para un efecto seamless perfecto, necesitamos:
    // 1. Al menos 2 sets completos para la transición
    // 2. Un set extra para pantallas muy anchas
    // 3. Más duplicados cuando hay zoom (viewport más ancho)
    const baseDuplicates = Math.max(4, Math.ceil(cardsPerViewport * 3.5));
    
    // Añadir duplicados extra para pantallas muy anchas
    const extraDuplicates = windowWidth > 2000 ? 2 : 0;
    
    return baseDuplicates + extraDuplicates;
  }, [windowWidth]);

  // Función para manejar el resize de la ventana con debounce
  const handleResize = useCallback(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };
    
    debouncedResize();
  }, []);

  useEffect(() => {
    // Calcular duplicados iniciales
    setDuplicateCount(calculateDuplicateCount());

    // Agregar event listener para resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateDuplicateCount, handleResize]);

  // Recalcular duplicados cuando cambia el ancho de la ventana
  useEffect(() => {
    setDuplicateCount(calculateDuplicateCount());
  }, [windowWidth, calculateDuplicateCount]);

  // Función para generar duplicados de un array de proyectos
  const generateDuplicates = useCallback((projects) => {
    const duplicates = [];
    for (let i = 0; i < duplicateCount; i++) {
      duplicates.push(...projects);
    }
    return duplicates;
  }, [duplicateCount]);

  return {
    duplicateCount,
    windowWidth,
    generateDuplicates
  };
}; 