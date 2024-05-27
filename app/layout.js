'use client';
import { useState } from 'react';
import Cursor from '@/components/CursorFollow';
import Socials from '@/components/Socials';
import Navbar from '@/components/Navbar';
import "./globals.css";

export default function RootLayout({ children }) {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
      setActive(!isActive); 
  };

  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar />
        {children}
        <Socials />
      </body>
    </html>
  );
}