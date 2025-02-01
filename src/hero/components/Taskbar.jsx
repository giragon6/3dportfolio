import React from 'react';

function Taskbar({ onToggleStartMenu }) {
  return (
    <div className="taskbar">
      <span onClick={onToggleStartMenu}>Emme M</span>
      <div className="taskbar-icons">
        <div className="taskbar-icon">Dev Portfolio</div>
      </div>
    </div>
  );
}

export default Taskbar;
