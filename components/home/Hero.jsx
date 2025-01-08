export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center pt-16 md:pt-20">
      {/* เพิ่ม pt-16 สำหรับ padding-top เพื่อไม่ให้ Hero ทับ Navbar */}
      <div className="absolute inset-0">
        <img
          src="/assets/img/herobg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-serif mb-20">
            <span className="text-teal-600 leading-[1.3]">Meeting </span>
            <span className="leading-[1.3]">your vision</span>
            <br />
            shaping the{" "}
            <span className="text-teal-600 leading-[1.3]">Creative</span> world together.
          </h1>

          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 text-lg hover:bg-gray-800 transition-colors"
          >
            Line Contact to consult
          </a>
        </div>
      </div>
    </div>
  );
}
