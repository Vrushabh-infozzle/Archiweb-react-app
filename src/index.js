import React from 'react';
import ReactDOM from 'react-dom/client';
import DisplayUi from './app';

try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<DisplayUi/>);

    // ReactDOM.render(<NameL/>,document.getElementById('root'));

} catch (error) {
    alert(error.message);
}


