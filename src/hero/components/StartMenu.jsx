import React from 'react';

function StartMenu({ visible, onToggle }) {
  if (!visible) return null;

  return (
    <div className="start-menu">
      <button onClick={onToggle}>Start</button>
      <div className="menu-content">
        <ul>
          <li><a href="#">Documents</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Shut Down</a></li>
        </ul>
      </div>
    </div>
  );
}

export default StartMenu;
