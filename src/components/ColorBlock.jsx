import React from 'react';

function ColorBlock({ colors }) {
  const style = {
    width: '50px',
    height: '50px',
    backgroundColor: colors || 'gray'
  };

  return <div style={style}></div>;
}

export default ColorBlock;