import React, { Component } from 'react';
import './App.css';

import Book1 from './Book1';
import Loader from 'react-loader-spinner';
import Project from './Project';
import Search from './Project';
import ProductList from './ProductList';
import Project1 from './Project1';





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }
  render() {
    if (this.state.loading) {
      return (
        <Loader
          type="TailSpin"
          color="red"
          height={100}
          width={500}
          className='loader1'
        />

      )
    } else {

      return (

        <div className='App'>

          <Project1 />




        </div>
      )
    }
  }
}


export default App;