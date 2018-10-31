import React, { Component } from 'react';
import { Header,Body, Menu, Side, Footer } from './components';
import './Responsive.css';

class App extends Component {
  render() {

    const pages = ['Home', 'About', 'Contact'];

    return (
      <div className="App">

        <Header title="Responsive React Components" />

        <div className="row">
          <div className="col-3 col-s-3 menu">
            <Menu menu={ pages } />
          </div>
          <div className="col-6 col-s-9">
            <Body />
          </div>
          <div className="col-3 col-s-12">
            <Side />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>

      </div>
    );
  }
}
export default App;