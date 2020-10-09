import React, { Component } from "react";

import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    data: ""
  }
  searchHarry = (event) => {
    Axios({
      url: "/api/book-search",
      method: 'get',
      params: {
        search: "Harry"
      }
    }).then((response) => {
      this.setState({
        data: JSON.stringify(response.data),
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.searchHarry}>Search</button>
       <pre>{this.state.data}</pre>
      </div>
     
    );
  }
}

export default App;
