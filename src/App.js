import React from 'react';
import Sphere from "./components/Sphere";
import Options from "./components/Options";

class App extends React.Component {

  state = {
    range: 100,
    links: 5,
  };

  changeOptionsHandler = (range, links) => {
      this.setState({
          ...this.state, range: range, links: links
      });
  };


  render() {
    return (
        <div className="App">
          <Options range={this.state.range} links={this.state.links} onChange={this.changeOptionsHandler} />
          <Sphere range={this.state.range} links={this.state.links} />
        </div>
    );
  }
}

export default App;
