import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.response.data }));
  }

  render() {
    return (
      <div className="App">
        <SearchBar placeholder="Search" data={this.state.data} />
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
