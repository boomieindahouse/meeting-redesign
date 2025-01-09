import './globals.css';
import { Poppins } from 'next/font/google';  // นำเข้า Poppins แทน Inter
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SmoothScroll from './providers/smooth-scroll';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '400', '700'] });

export const metadata = {
  title: "Meeting Creative - บริษัท มีตติ้ง ครีเอทีฟ จำกัด บริษัทรับออกแบบเว็บไซต์ กราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
  description: "Meeting Creative บริษัทรับพัฒนาเว็บไซต์ ออกแบบกราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
  keywords: [
    "รับเขียนเว็บโคราช",
    "รับเขียนเว็บไซต์",
    "รับทำเว็บ",
    "รับทำเว็บไซต์",
    "ทำเว็บโคราช",
    "รับทำเว็บไซต์โคราช",
    "รับทำเว็บโคราช",
    "พัฒนาเว็บไซต์",
    "เขียนเว็บโคราช",
    "มีตติ้งครีเอทีฟ",
    "meeting creative",
    "มิตติ้ง ครีเอทีฟ",
    "meeting",
    "มิตติ้ง",
    "มีตติ้ง ครีเอทีฟ",
    "ดูแลเว็บไซต์",
    "เดินสายแลน",
    "ระบบเน็ตเวิร์ค",
    "กล้องวงจรปิด",
    "ออกแบบกราฟิก",
    "ออกแบบโลโก้เว็บไซต์",
    "ออกแบบกราฟิกโคราช",
    "รับยิงโฆษณา",
    "พัฒนา application โคราช",
    "บริษัทรับเขียนเว็บในโคราช",
    "บริษัทเขียนเว็บไซต์ โคราช",
    "เขียนเว็บโคราช"
  ],
  openGraph: {
    title: "Meeting Creative - บริษัท มีตติ้ง ครีเอทีฟ จำกัด บริษัทรับออกแบบเว็บไซต์ กราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
    description: "Meeting Creative บริษัทรับพัฒนาเว็บไซต์ ออกแบบกราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
    url: "https://meeting.co.th",
    images: [
      {
        url: "https://backend.meeting.co.th/storage/3/meeting-logo.png",
        width: 800,
        height: 600,
        alt: "Meeting Creative Logo"
      }
    ],
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScroll>
          <div className="hero-layout">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
