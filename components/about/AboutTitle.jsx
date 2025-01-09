export default function Abouttitle() {
  return (
    <div className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0">
        <img
          src="/assets/img/aboutbg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-2/3">
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-serif mb-14">
            <p className="text-sm text-gray-500 font-sans text-start mb-10">About us</p>
            <span className="text-black leading-[1.3]">Join us on our journey and meet the amazing people behind our brand.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}