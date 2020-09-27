import * as React from 'react';
import { Beer } from './Beer';
import BeerVue from './BeerVue';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface Props { }

interface State {
  beers: Beer[];
  newBeerName: string;
}
export default class BeerListVue extends React.Component<Props, State> {
  readonly state = {
    beers: [new Beer("Coreff"), new Beer("Corona"), new Beer("Mort Subite")],
    newBeerName: ""
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newBeerName: event.target.value });
  }

  createNewBeer = () => {
    if (this.state.newBeerName.length > 0) {
      this.setState(state => {
        const list = state.beers.concat(new Beer(state.newBeerName));
        return {
          newBeerName : "",
          beers: list
        };
      });
    }
  }

  list() {
    return this.state.beers?.map((beerItem, index) => (
      <BeerVue beer={beerItem} key={index} />
    ));
  }

  render() {
    return (
      <div>
        <h1>Beer list</h1>
        <Button variant="contained" color="primary" onClick={this.createNewBeer}>Add beer</Button>
        <br /><br />
        <TextField value={this.state.newBeerName} label="Name of the beer" variant="outlined" onChange={this.handleChange} />
        <ul>{this.list()}</ul>

      </div>
    );
  }
}