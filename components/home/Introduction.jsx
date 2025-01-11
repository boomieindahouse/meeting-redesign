export default function Introduction() {
  return (
    <section className="py-10 pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Introductions</p>
            <p className="text-xl lg:text-3xl font-serif lg:mb-6">
              We specialize in expert{" "}
              <a href="/web-design" className="text-teal-600">
                website design
              </a>
              , captivating{" "}
              <a href="/graphic-design" className="text-teal-600">
                graphic design
              </a>
              , and seamless{" "}
              <a href="/network" className="text-teal-600">
                network management
              </a>
              . Let us help you create a powerful online presence that stands out.
            </p>
          </div>

          <div className="relative">
            <img
              src="/assets/img/introimg.png"
              alt="Team working together"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}