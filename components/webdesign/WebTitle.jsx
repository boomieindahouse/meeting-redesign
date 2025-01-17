export default function WebTitle() {
    return (
        <div className="relative min-h-screen flex items-center pt-16 md:pt-20">
            <div className="absolute inset-0">
                <picture>
                    {/* in sm res change bg */}
                    <source
                        srcSet="/assets/img/webdesignpage/webbg-sm.png"
                        media="(max-width: 640px)" // ขนาดหน้าจอที่เล็กกว่าหรือเท่ากับ 640px
                    />
                    {/* desktop res bg */}
                    <img
                        src="/assets/img/webdesignpage/webbgdes.png"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="w-4/5 lg:w-1/2">
                    <h1 className="text-3xl lg:text-5xl font-serif mb-14">
                        <p className="text-sm text-gray-500 font-sans text-start mb-4">Web Design</p>
                        <span className="text-black leading-[1.3]">Custom <span className="text-teal-600">Website Development </span>tailored to your needs.</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
