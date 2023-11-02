"use client"

import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import heroBg from "../../public/assets/heroBg.jpg"; // Change this path to the actual path of your heroBg.jpg image
import FloatingButton from './FloatingContactButton'; // Update the import path if necessary
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="App">
      <div className="video-container" style={{ backgroundImage: `url(${heroBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center',backdropFilter: 'blur(70px)'  }}>
      </div>
        <Navbar />
        {/* Add the Chatbot component<Chatbot />  */}
        {children}
        <Footer />
        <FloatingButton /> {/* Add the FloatingButton component */}
      </body>
    </html>
  );
}

