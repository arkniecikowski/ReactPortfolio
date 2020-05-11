import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

class App extends Component {

    render()
    {
        return (
            <div className="App">
                <Navbar/>
                <Aboutme/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

export default App;
