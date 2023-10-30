import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>react-vite-typescript-template</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click to increase the count: {count}
        </button>
      </div>
    </>
  );
}

export default App;
