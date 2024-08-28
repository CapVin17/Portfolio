"use client"
import React, { useState, useEffect } from 'react';

const RotateAlert = () => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('rotateAlertDismissed');
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('rotateAlertDismissed', 'true');
  };

  if (!isVisible || isPortrait) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#000000cc] text-white text-center py-2 z-[1000]">
      <p>Please rotate your device for the best experience.</p>
      <button
        onClick={handleDismiss}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Got it
      </button>
    </div>
  );
};

export default RotateAlert;
