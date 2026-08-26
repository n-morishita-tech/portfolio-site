import { useEffect, useState } from 'react';

export const useIntroVisibility = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('intro_seen');

    if (!seen) {
      setShow(true);
      sessionStorage.setItem('intro_seen', 'true');
    }
  }, []);

  return show;
};
