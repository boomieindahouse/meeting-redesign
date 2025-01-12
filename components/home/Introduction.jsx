export default function Introduction() {
  return (
    <section className="py-10 pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[8pt] lg:text-sm text-gray-600 mb-4 text-start">Introductions</p>
            <p className="text-xl lg:text-3xl font-serif mb-6 lg:mb-6">
              At{" "}
              <span className="text-teal-600">
                Meeting Creative
              </span>
              , we provides a comprehensive range of services designed to elevate your business in the digital world.{" "}
            </p>
            <p className='text-[12pt] lg:text-base text-gray-600'>
              Our team of experts is dedicated to providing top-notch solutions tailored to meet your unique needs.
            </p>

            <div className="mt-10 grid grid-cols-3 sm:grid-cols-3 gap-8 text-start">
              <div>
                <h2 className="text-xl lg:text-4xl font-medium text-gray-800">7 Years</h2>
                <p className="text-gray-600 text-sm lg:text-base mt-2">in business</p>
              </div>
              <div>
                <h2 className="text-xl lg:text-4xl font-medium text-gray-800">120+</h2>
                {/* สำหรับหน้าจอ lg และ md แสดง completed projects */}
                <p className="hidden md:block text-gray-600 text-sm lg:text-base mt-2">completed projects</p>

                {/* สำหรับหน้าจอ sm แสดงแค่ projects */}
                <p className="block md:hidden text-gray-600 text-sm lg:text-base mt-2">projects</p>
              </div>
              <div>
                <h2 className="text-xl lg:text-4xl font-medium text-gray-800">20+</h2>
                <p className="text-gray-600 text-sm lg:text-base mt-2">clients</p>
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