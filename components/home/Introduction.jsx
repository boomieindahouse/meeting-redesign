export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-600 mb-4 text-start">Introductions</p>
            <p className="text-3xl font-serif mb-6">
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

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl lg:text-4xl font-medium mb-2">7 Years</h3>
                <p className="text-gray-600">in business</p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-4xl font-medium mb-2">100+</h3>
                <p className="text-gray-600">completed projects</p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-4xl font-medium mb-2">20+</h3>
                <p className="text-gray-600">our Clients</p>
              </div>
            </div>
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