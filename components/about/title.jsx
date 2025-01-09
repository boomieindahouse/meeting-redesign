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
          <div className="max-w">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif mb-14">
              <span className="text-black leading-[1.3]">About Us</span>
              <br />
              <span className="text-black leading-[1.3]">Why <span className="text-teal-600">Meeting Creative</span>?</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
  