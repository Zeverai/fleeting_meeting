// ---------------------------------------------------- Import Dependencies Here -->
import React from 'react';

// ---------------------------------------------------------- Set Up Router Here -->
import { BrowserRouter as Router, Route } from 'react-router-dom';

// ----------- Import Login and Meeding Components from src/components directory -->
import Join from './components/Join';
import Meeting from './components/Meeting';

const App = () => {
    return (
        <Router>
            {/* First route is for user to get user-name for the meeting room. */}
            <Route path="/" exact component={Join}/>
            {/* Second route is our meeting room. */}
            <Route path="/meeting" component={Meeting}/>
        </Router>
    )
}

export default App;
