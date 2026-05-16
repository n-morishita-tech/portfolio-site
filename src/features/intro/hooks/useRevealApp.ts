import { useEffect } from 'react';
import { IntroStage } from '../types';

export const useRevealApp = (stage: IntroStage, showIntro: boolean) => {
  useEffect(() => {
    const el = document.getElementById('app-content');
    if (!el) return;

    if (!showIntro || stage === IntroStage.DONE) {
      el.style.opacity = '1';
    }
  }, [stage, showIntro]);
};
