import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import heroBg from "../../public/assets/heroBg.jpg"; // Change this path to the actual path of your heroBg.jpg image

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SEDI SOLAR',
  description: ' ',
};

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
        {children}
        <Footer />
      
      </body>
    </html>
  );
}
