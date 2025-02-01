import React from 'react';

function Window({ title, content, onClose }) {
  return (
    <div className="window">
      <div className="window-header">
        <span>{title}</span>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="window-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Window;
