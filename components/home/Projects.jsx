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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="pb-4">{children}</div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="bg-white text-black p-4 md:px-36 md:py-20 max-w ">
      <div className="mb-12">
      <h2 className="text-base text-gray-400 mb-4">Projects</h2>
        <h1 className="text-4xl md:text-4xl font-serif mb-12">
          <span className="text-teal-600">Our Previous Projects:</span> <br /> Showcasing Our Expertise and Excellence.
        </h1>
      </div>

      <ProjectSection title="Website Development">
        <div className="space-y-6">
          <ul className="space-y-2 mb-4 text-gray-600">
            <li>• Custom Website</li>
            <li>• Custom Headless Website</li>
            <li>• Custom Algorithm Website</li>
            <li>• Custom Webflow Website</li>
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
          <p>Graphic Design content here...</p>
        </div>
      </ProjectSection>

      <ProjectSection title="Network Service">
        <div className="space-y-4">
          <p>Network Service content here...</p>
        </div>
      </ProjectSection>
    </div>
  );
};

export default ProjectsPage;