import React from 'react';
import Header from './components/Header';
import Tool from './components/Tool'
import Datgon from './components/Datgon'
import QuickGuide from './components/QuickGuide';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './CSS/App.css';

function App() {
  return (
    <Router>
				<div className='App'>
					<div className='container'>
						<Header />
            <Route exact link='jax.org' />
						<Route exact path='/' render={(props) => ( <Tool /> )} />
						<Route path='/quick-guide' component={QuickGuide} />
            <Route path='/datgon' component={Datgon} />
					</div>
				</div>
			</Router>
    // <div className="App">
    //   <Main />
    // </div>
  );
}

export default App;
