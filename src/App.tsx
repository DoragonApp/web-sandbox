import React from 'react';
import './App.css';
import axios from 'axios';
import AnimeGrid from './AnimeGrid';

interface Props {}
interface State {
  error?: any,
  isLoaded: Boolean,
  items: Array<any>
}

class App extends React.Component<Props, State> {
  state: State = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    axios.get("https://api.jikan.moe/v3/season/2020/summer").then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data.anime
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
  }
  
  render() {
    const { error, isLoaded } = this.state;
    const animeGridProps = { // make sure all required component's inputs/Props keys&types match
      items: this.state.items
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <AnimeGrid {...animeGridProps}/>
      );
    }
  }
}

export default App;
