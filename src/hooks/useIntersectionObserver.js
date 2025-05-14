import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          element.classList.add('visible');
          hasAnimated.current = true;
          observer.unobserve(element); // Desconectamos después de la primera animación
        }
      });
    }, {
      threshold: 0.15, // El elemento debe estar 15% visible
      rootMargin: '0px 0px -10% 0px', // Un pequeño margen para activar antes
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return elementRef;
}; 