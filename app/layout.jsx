import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Meeting Creative - Shaping the Creative World Together',
  description: 'Meeting Creative is a professional creative agency specializing in web design, graphic design, and networking solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}