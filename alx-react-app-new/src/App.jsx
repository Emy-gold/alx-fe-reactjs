import React from 'react';
import Counter from './components/Counter';  // Import the Counter component

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>React Counter Application</h1>
      {/* Include the Counter component */}
      <Counter />
    </div>
  );
}

export default App;
