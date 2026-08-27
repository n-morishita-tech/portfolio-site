'use client';

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 指定した量（ここでは300px）スクロールしたらボタンを表示する
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-gray-700 z-99"
          aria-label="Scroll to top"
        >
          {/* シンプルな上向き矢印。アイコンライブラリを使ってもOK */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
