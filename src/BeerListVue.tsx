import * as React from 'react';
import { Beer } from './Beer';
import BeerVue from './BeerVue';

interface Props {
  count?: number;
  beers?: Beer[];
}

export default class BeerListVue extends React.Component<Props> {
  static defaultProps: Props = {
    count: 10,
    beers: [new Beer("Coreff"), new Beer("Corona"), new Beer("Mort Subite")]
  };

  list() {
    return this.props.beers?.map((beerItem,index) => (
      <BeerVue beer={beerItem} key={index} />
    ));
  }

  render() {
    return (
      <div>
        <h1>Beer list</h1>
        <ul>{this.list()}</ul>
      </div>
    );
  }
}