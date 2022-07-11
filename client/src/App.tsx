import { useState } from 'react';

import './App.css';

function App() {
    const [counter, setCounter] = useState(3);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <div>{counter}</div>
            <h1 className="text-3xl font-bold underline">Hello World</h1>
        </>
    );
}

export default App;
