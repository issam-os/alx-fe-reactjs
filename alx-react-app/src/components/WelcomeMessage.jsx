import React from 'react';

function WelcomeMessage() {
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; 

function App() {
    return (
        <div>
            <WelcomeMessage />
        </div>
    );
}

export default App;
 
