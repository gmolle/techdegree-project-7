import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// API KEY IMPORT
import apiKey from './config';

// COMPONENTS
import Header from './components/Header'
import ImageList from './components/ImageList';
import Error from "./components/Error";

class App extends Component {

  // State for the images and loading
  state = {
    searchImg: [],
    catImg: [],
    dogImg: [],
    lizardImg: [],
    loading: true
  };

  // Calls the search function when the images mount into the DOM
  componentDidMount() {
    this.performSearch('cat');
    this.performSearch('dog');
    this.performSearch('lizard');

    // Stops the page from showing no results found on refresh after searching
    this.performSearch(document.location.pathname.split('/')[2]);
  }

  // Search function with axios
  performSearch = (query) => {
    this.setState({ loading: true });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        let responseData = response.data.photos.photo;
        if (query === "cat") {
          this.setState({ catImg: responseData });
        } else if (query === 'dog') {
          this.setState({ dogImg: responseData });
        } else if (query === 'lizard') {
          this.setState({ lizardImg: responseData });
        } else {
          this.setState({ searchImg: responseData });
        }
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" render={props => (<Header {...props} onSearch={this.performSearch} />)} />
          <Switch>
            <Route exact path="/" render={() => <Redirect to='/cats' />} />
            <Route path="/dogs" render={() => <ImageList images={this.state.dogImg} title='Dog Photos' loading={this.state.loading} />} />
            <Route path="/cats" render={() => <ImageList images={this.state.catImg} title='Cat Photos' />} />
            <Route path="/lizards" render={() => <ImageList images={this.state.lizardImg} title='Lizard Photos' />} />
            <Route path="/search/:topic" render={({ match }) => <ImageList images={this.state.searchImg} title={`${match.params.topic} Photos`} loading={this.state.loading} />} />
            <Route component={Error} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
