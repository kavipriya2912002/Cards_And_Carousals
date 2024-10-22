import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Homepage from './pages/Homepage';
import Cards from './pages/Cards';
import AnimeStack from './components/AnimeStack';
import BubbleCanvas from './components/BubbleCanvas';

function App() {

  // Disable right-click and keyboard shortcuts
  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable common developer tool shortcuts
    const disableDevToolsShortcuts = (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || 
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    // Detect DevTools
    const detectDevTools = () => {
      const threshold = 160;
      window.onresize = function () {
        if (
          window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold
        ) {
          alert('Please close DevTools to interact with this site.');
          document.body.style.filter = 'blur(10px)';
        } else {
          document.body.style.filter = 'none';
        }
      };
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableDevToolsShortcuts);
    detectDevTools();

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableDevToolsShortcuts);
      window.onresize = null;
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/card" element={<AnimeStack />} />
          <Route path="/bubble" element={<BubbleCanvas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
