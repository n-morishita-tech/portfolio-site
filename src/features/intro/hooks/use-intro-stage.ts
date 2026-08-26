'use client';

import { useEffect, useState } from 'react';
import { IntroStage } from '@/features/intro/types';

export function useIntroStage() {
  const [stage, setStage] = useState(IntroStage.TEXT);

  useEffect(() => {
    const timeline = [
      { stage: IntroStage.TEXT, time: 1200 },
      { stage: IntroStage.EXPLODE, time: 1000 },
      { stage: IntroStage.GATHER, time: 1200 },
      { stage: IntroStage.LOGO, time: 800 },
      { stage: IntroStage.MOVE, time: 800 },
      { stage: IntroStage.OPEN, time: 800 },
      { stage: IntroStage.DONE, time: 300 },
    ];

    let total = 0;

    timeline.forEach((step) => {
      total += step.time;

      setTimeout(() => {
        setStage(step.stage);
      }, total);
    });
  }, []);

  return stage;
}
