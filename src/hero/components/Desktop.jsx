import React from 'react';
import computerIcon from '../assets/my-computer.svg'
import explorerIcon from '../assets/internet-explorer.png'
import notepadIcon from '../assets/notepad.png'

function Desktop({ toggleWindow }) {
  return (
    <div className="desktop">
      <div className="icon" onClick={() => toggleWindow('myComputer')}>
        <img src={computerIcon} alt="My Computer" />
        <p>My Computer</p>
      </div>
      <div className="icon" onClick={() => toggleWindow('explorer')}>
        <img src={explorerIcon} alt="Explorer" />
        <p>Explorer</p>
      </div>
      <div className="icon">
        <img src={notepadIcon} alt="Notepad" />
        <p>Notepad</p>
      </div>
    </div>
  );
}

export default Desktop;
