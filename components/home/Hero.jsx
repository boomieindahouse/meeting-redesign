export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center">
      <div className="absolute inset-0">
        <img
          src="/assets/img/herobg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
            <span className="text-teal-600">Meeting</span> your vision
            <br />
            shaping the{" "}
            <span className="text-teal-600">Creative</span> world together.
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
