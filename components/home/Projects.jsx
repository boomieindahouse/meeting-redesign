'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ProjectSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-2xl font-medium my-4">{title}</span>
        {isOpen ? (
          <Minus className="h-6 w-6" />
        ) : (
          <Plus className="h-6 w-6" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="pb-4">{children}</div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="bg-gray-50 text-black p-4 md:px-36 md:py-20 max-w ">
      <div className="mb-12">
      <p className="text-sm text-gray-600 mb-4 text-start">Projects</p>
        <h1 className="text-4xl md:text-4xl font-serif mb-12">
          <span className="text-teal-600">Our Previous Projects:</span> <br /> Showcasing Our Expertise and Excellence.
        </h1>
      </div>

      <ProjectSection title="Website Development">
        <div className="space-y-6">
          <ul className="space-y-2 mb-4 text-gray-600">
            <li><span className="text-teal-600 text-xl">•</span> Custom Website</li>
            <li><span className="text-teal-600 text-xl">•</span> Custom Headless Website</li>
            <li><span className="text-teal-600 text-xl">•</span> Custom Algorithm Website</li>
            <li><span className="text-teal-600 text-xl">•</span> Custom Webflow Website</li>
          </ul>
          <p className="text-lg">
            Achieve Your Business Objectives with a Tailor-Made, Speedy, and Mobile-Optimized Website.
          </p>
          <a href="#" className="text-gray-600 hover:text-black">
            See more
          </a>
        </div>
      </ProjectSection>

      <ProjectSection title="Graphic Design">
        <div className="space-y-4">
          <ul className="space-y-2 mb-4 text-gray-600">
            <li><span className="text-teal-600 text-xl">•</span> Custom Logo Design</li>
            <li><span className="text-teal-600 text-xl">•</span> Custom Branding & Identity</li>
            <li><span className="text-teal-600 text-xl">•</span> Custom Print Design</li>
            <li><span className="text-teal-600 text-xl">•</span> Custom Digital Art & Illustration</li>
          </ul>
          <p className="text-lg">
            Create Visually Stunning Designs that Captivate and Engage Your Audience.
          </p>
          <a href="#" className="text-gray-600 hover:text-black">
            See more
          </a>
        </div>
      </ProjectSection>

      <ProjectSection title="Network Service">
        <div className="space-y-4">
          <ul className="space-y-2 mb-4 text-gray-600">
            <li><span className="text-teal-600 text-xl">•</span> Custom Network Design</li>
            <li><span className="text-teal-600 text-xl">•</span> Network Security Solutions</li>
            <li><span className="text-teal-600 text-xl">•</span> Managed Network Services</li>
            <li><span className="text-teal-600 text-xl">•</span> Cloud Networking Solutions</li>
          </ul>
          <p className="text-lg">
            Empower Your Business with Reliable, Secure, and Scalable Network Solutions.
          </p>
          <a href="#" className="text-gray-600 hover:text-black">
            See more
          </a>
        </div>
      </ProjectSection>
    </div>
  );
};

export default ProjectsPage;