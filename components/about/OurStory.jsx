export default function Introduction() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <video
                            src="/assets/videos/vid.mp4"
                            controls
                            autoPlay
                            muted
                            loop
                            className="rounded-xl shadow-xl"
                        ></video>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-4 text-start">Our Story</p>
                        <p className="text-3xl font-serif mb-6">
                            <span className="text-teal-600">Meeting Creative </span>is a website design company, graphics, networking
                            including online marketing services.
                        </p>
                        <p>
                            The executives and staff of Meeting Creative Co., Ltd. have more than 7 years of experience
                            Ready to take care of and be by your side.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
