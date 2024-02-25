
import React from 'react';
import './CreationModal.css';

export const CreationModal = ({ isOpen, closeModal, }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form className='add-modal'>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Image URL" />
          <button type="submit">Add</button>
        </form>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};
