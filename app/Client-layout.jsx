'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function ClientLayout({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return <>{children}</>;
}
