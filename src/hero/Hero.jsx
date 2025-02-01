import React, { useState } from 'react';
import './Hero.css';

import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';
import StartMenu from './components/StartMenu';
import Window from './components/Window';

const aboutContent = "Hi! My name is Emme. I'm a junior in high school and I love finding creative solutions to problems through code!"
const skillsContent = "My skills include JavaScript, Python, React, and Flutter"

function App() {
  const [startMenuVisible, setStartMenuVisible] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);

  // Toggle the visibility of the Start Menu
  const toggleStartMenu = () => {
    setStartMenuVisible(!startMenuVisible);
  };

  // Open or close a window
  const toggleWindow = (windowName) => {
    console.log(openWindows)
    if (openWindows.includes(windowName)) {
      setOpenWindows(openWindows.filter((w) => w !== windowName));
    } else {
      setOpenWindows([...openWindows, windowName]);
    }
  };

  return (
    <div className="App">
      {/* Start Menu */}
      <StartMenu visible={startMenuVisible} onToggle={toggleStartMenu} />

      {/* Desktop */}
      <Desktop toggleWindow={toggleWindow} />

      {/* Taskbar */}
      <Taskbar onToggleStartMenu={toggleStartMenu} />


      {/* Windows */}
      {openWindows.includes('myComputer') && <Window title="My Computer" content={aboutContent} onClose={() => toggleWindow('myComputer')} />}
      {openWindows.includes('explorer') && <Window title="Explorer" content={skillsContent} onClose={() => toggleWindow('explorer')} />}
    </div>
  );
}

export default App;
