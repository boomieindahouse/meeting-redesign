import React from "react";

const ContactForm = () => {
    return (
        <section className="text-black py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Title */}
                <h1 className="h1-section sm:h3-res font-serif text-black text-xl lg:text-3xl bg-clip-text bg-grad-text">
                    Drop Us a Line
                </h1>

                {/* Form */}
                <form className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Name */}
                        <div>
                            <label className="block text-left text-black mb-1">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full bg-secondbg text-black border border-black px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-left text-black mb-1">
                                Your Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                className="w-full bg-secondbg text-black border border-black px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
                                required
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label className="block text-left text-black mb-1">
                                Your Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                className="w-full bg-secondbg text-black border border-black px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-left text-black mb-1">Your Message</label>
                        <textarea
                            rows="5"
                            className="w-full bg-secondbg text-black border border-black px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}

                    <a
                        href="https://lin.ee/gYvfSPi"
                        className="inline-block bg-black text-white px-6 py-2 mt-6 text-[10pt] lg:text-lg border border-transparent lg:hover:bg-transparent lg:hover:border-black lg:hover:text-black transition duration-300 no-underline"
                    >
                        Submit
                    </a>

                </form>
            </div>
        </section>
    );
};

export default ContactForm;
