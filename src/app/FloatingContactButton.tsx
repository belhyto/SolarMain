import React, { useState } from 'react';
import './FloatingContactButton.css'; // You'll create this CSS file
import ContactForm from './contact';

const FloatingContactButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Close the form by setting isFormVisible to false
  };

  return (
    <div>
      <a href="#" className="floating-contact-button" onClick={toggleFormVisibility}>
        Contact Us
      </a>
      {isFormVisible && (
        <ContactForm onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default FloatingContactButton;
