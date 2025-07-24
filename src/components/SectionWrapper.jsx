// src/components/SectionWrapper.jsx
import React from 'react';

const SectionWrapper = ({ id, children }) => (
  <section id={id} className="section">
    <div className="section-content">
      {children}
    </div>
  </section>
);

export default SectionWrapper;
