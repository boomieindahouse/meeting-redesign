export default function Contact() {
    return (
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/img/contactimg.png')" }}
      >
        <div className="text-center text-black px-4 md:px-8 max-w-4xl">
          <p className="text-sm text-gray-600 mb-4 text-start">Contact us</p>
          <h1 className="text-3xl md:text-5xl font-serif leading-snug mb-6 text-start">
            Partner with{" "}
            <span className="text-teal-600 font-serif">Meeting Creative</span> to elevate
            your creative products through innovative design and expert solutions.
          </h1>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-start">
            <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
              Contact us
            </button>
            <button className="border border-black px-6 py-2 hover:bg-gray-100 transition">
              Line Contact
            </button>
          </div>
        </div>
      </section>
    );
  }
  