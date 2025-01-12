import { Icon } from "@iconify/react";

export default function Contact() {
    return (
        <section className="bg-secondbg py-16">
            <div className="container mx-auto px-4">
                <div className="overflow-hidden">
                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300 rounded-lg">
                        {/* Contact Details */}
                        <div className="bg-white h-[480px] p-5 contact-left">
                            <div className="max-w-2xl">
                                {/* Logo */}
                                <div className="flex justify-center items-center my-6">
                                    <img
                                        src="/assets/img/logo.png"
                                        alt="Meeting Creative"
                                        className="px-10"
                                    />
                                </div>

                                {/* Meeting */}
                                <div className="flex justify-center items-center gap-6 mb-8">
                                    <p className="text-gray-700 text-base lg:text-lg">
                                        Meeting Creative Co.,Ltd
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="text-turqoise flex-shrink-0">
                                        <Icon icon="basil:location-outline" className="text-3xl" />
                                    </div>
                                    <p className="text-gray-700 text-[10pt] lg:text-base">
                                        555/126 Supalai Bella, Moo 4, T. Joho,
                                        A. Mueang, Nakhon Ratchasima 30310
                                    </p>
                                </div>

                                {/* Facebook */}
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="text-turqoise flex-shrink-0">
                                        <Icon icon="iconoir:facebook" className="text-3xl" />
                                    </div>
                                    <a
                                        href="https://facebook.com/MeetingCreative"
                                        className="text-gray-700 text-[10pt] lg:text-base hover:text-teal-600 transition-colors no-underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Meeting Creative
                                    </a>
                                </div>

                                {/* Line */}
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="text-turqoise flex-shrink-0">
                                        <Icon icon="la:line" className="text-3xl" />
                                    </div>
                                    <a
                                        href="https://lin.ee/gYvfSPi"
                                        className="text-gray-700 text-[10pt] lg:text-base hover:text-teal-600 transition-colors no-underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Line
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="text-turqoise flex-shrink-0">
                                        <Icon icon="line-md:phone" className="text-3xl" />
                                    </div>
                                    <a
                                        href="tel:044-002221"
                                        className="text-gray-700 text-[10pt] lg:text-base hover:text-teal-600 transition-colors no-underline" 
                                    >
                                        044-002221
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-6">
                                    <div className="text-turqoise flex-shrink-0">
                                        <Icon icon="tabler:mail" className="text-3xl" />
                                    </div>
                                    <a
                                        href="mailto:contact@meeting.co.th"
                                        className="text-gray-700 text-[10pt] lg:text-base hover:text-teal-600 transition-colors no-underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        contact@meeting.co.th
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="h-[480px] w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.170148301632!2d102.14998617577089!3d15.03870226619935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311eb350870116fd%3A0x62cde3bdef665fb4!2zTWVldGluZyBDcmVhdGl2ZSBDby4sIEx0ZC4gLSDguJrguKPguLTguKnguLHguJcg4Lih4Li14LiV4LiV4Li04LmJ4LiHIOC4hOC4o-C4teC5gOC4reC4l-C4teC4nyDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2sth!4v1735582867281!5m2!1sen!2sth"
                                className="w-full h-full contact-right"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}