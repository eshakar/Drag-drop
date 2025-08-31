import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      <Sidebar />
      <Canvas onSelect={setSelectedId} />
      <PropertiesPanel selectedId={selectedId} />
    </div>
  );
}

export default App;