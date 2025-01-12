export default function Hero() {
    return (
      <div className="relative min-h-screen flex items-center pt-16 md:pt-20">
        {/* เพิ่ม pt-16 สำหรับ padding-top เพื่อไม่ให้ Hero ทับ Navbar */}
        <div className="absolute inset-0">
          <img
            src="/assets/img/contactpage/contactbg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
  
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-2/4">
            <h1 className="text-4xl lg:text-5xl font-serif mb-14">
              <span className="text-teal-600 leading-[1.3]">Contact Us </span>
              for Support and Solutions.
            </h1>
  
            <a
              href="https://lin.ee/gYvfSPi"
              className="inline-block bg-black text-white px-4 py-2 text-sm lg:px-8 lg:py-3 lg:text-lg border border-transparent lg:hover:bg-transparent lg:hover:border-black lg:hover:text-black transition duration-300 no-underline"
            >
              Line Contact to consult
            </a>
          </div>
        </div>
      </div>
    );
  }
  