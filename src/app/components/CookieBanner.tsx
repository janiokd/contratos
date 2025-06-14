'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
      <p className="mb-2 sm:mb-0">
        Este site utiliza cookies para melhorar a experiência do usuário. Ao continuar navegando, você concorda com nossa política de cookies.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
      >
        Aceitar
      </button>
    </div>
  );
}
