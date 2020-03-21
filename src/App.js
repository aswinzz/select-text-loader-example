import React, { Component } from 'react';
import things_to_do from './items';
import './App.css';
import SelectTextLoader from 'select-text-loader/dist/SelectTextLoader';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      things_to_do: things_to_do,
      selecting: false,
      randomIndex: -1
    }
  }

  showRandom = () => {
    this.setState({selecting: true});
    const randomIndex = Math.round(Math.random() * (this.state.things_to_do.length - 0) + 0); 
    this.setState({randomIndex});
    setTimeout(()=>this.setState({selecting: false}),2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            onClick={this.showRandom}
          >
            I am bored, Show a random thing to do
          </a>
          <p>
            {!this.state.selecting && this.state.randomIndex!==-1?this.state.things_to_do[this.state.randomIndex]:""}
            <SelectTextLoader loading={this.state.selecting} data={this.state.things_to_do} timeGap={60}/>
          </p>
        </header>
      </div>
    );
    }
}

export default App;
