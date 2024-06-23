import React from 'react';
import './App.css';
import {Blog, Blogposts} from './pages/Blog';
import {Home} from './pages/Home';
import{Client} from './pages/Client';
import {Service} from './pages/Service';
import {Aboutus} from './pages/Aboutus';
import {Contact} from './pages/Contact';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Navbar } from './components/navbar';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/client' element={<Client />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/aboutus' element={<Aboutus />}/>
            <Route path='/contactus' element={<Contact />}/>
            <Route path="/blogs/:id" element={<Blogposts />} />
          </Routes>
        </Router>
    );
  }
}

export default App;
