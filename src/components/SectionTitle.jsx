// src/components/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ children }) => (
  <h2 className="section-title text-center my-5 animate__animated animate__fadeIn">
    {children}
  </h2>
);

export default SectionTitle;