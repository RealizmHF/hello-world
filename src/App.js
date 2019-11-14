import React from 'react'
import Header from './components/Header'
import Tool from './components/Tool'
import Datgon from './components/Datgon'
import Download from './components/Download'
import ContactUs from './components/ContactUs'
import QuickGuide from './components/QuickGuide'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import './CSS/App.css'

function App() {
  return (
    <Router>
		<div className='App'>
			<div className='App-container'>
				<Header />
				<Route exact path='/' render={(props) => ( <Tool /> )} />
				<Route path='/download' component={Download} />
				<Route path='/quick-guide' component={QuickGuide} />
            	<Route path='/datgon' component={Datgon} />
				<Route path='/contact-us' component={ContactUs} />
			</div>
		</div>
	</Router>
  )
}

export default App
