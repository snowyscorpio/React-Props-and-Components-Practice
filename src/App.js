import React from 'react';
import ColorBlock from './components/ColorBlock';
import ActionButton from './components/ActionButton';
import ImageWithCaption from './components/ImageWithCaption';

function App() {
  const handleAction = () => alert("Button clicked!");

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Component Showcase</h1>

      <h2>ColorBlock</h2>
      <ColorBlock colors="pink" />
      <ColorBlock /> 


      <h2>ActionButton</h2>
      <ActionButton label="Click me" onAction={handleAction} />

      <h2>ImageWithCaption</h2>
      <ImageWithCaption
        src="https://i.pinimg.com/736x/0f/4e/b3/0f4eb3511db06ffd7372d30f3fd70dbe.jpg"
        caption="Cute Cat"
      />
    </div>
  );
}

export default App;
