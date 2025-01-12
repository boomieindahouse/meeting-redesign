import { useState } from 'react';

// Custom Hook for fetching partners
export const usePartners = () => {
  const [partners] = useState([
    { logo_url: "https://backend.meeting.co.th/storage/5335/test.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5328/Untitled-1.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5334/Untitled-2-Recovered.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5336/citylink.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5324/17.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5325/18.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5329/22.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5308/1.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5309/2.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5310/3.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5311/4.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5312/5.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5313/6.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5314/7.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5315/8.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5316/9.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5317/10.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5318/11.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5319/12.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5320/13.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5321/14.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5322/15.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/4516/24.jpg" },
    { logo_url: "https://backend.meeting.co.th/storage/5326/19.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5327/20.webp" },
    { logo_url: "https://backend.meeting.co.th/storage/5330/23.webp" },
  ]);

  return { partners };
};
