import * as React from 'react';
import { Beer } from './Beer';

interface Props {
  beer: Beer
}

export default class BeerVue extends React.Component<Props> {


  render() {
    return <li><h2>{this.props.beer.name}</h2></li>;
  }
}