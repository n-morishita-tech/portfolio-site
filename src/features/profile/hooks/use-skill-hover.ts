import { useEffect } from 'react';

export const useSkillHover = () => {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.skill-card');

    cards.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      };

      card.addEventListener('mousemove', handler);

      return () => card.removeEventListener('mousemove', handler);
    });
  }, []);
};
