import React from 'react';
import ReactDOM from 'react-dom';
import Account from './components/Account';

const App = () => {
    return (
        <div>
            <h1>Account Opening Application</h1>
            <Account />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
