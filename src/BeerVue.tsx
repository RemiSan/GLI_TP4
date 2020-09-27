import * as React from 'react';
import { Beer } from './Beer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
  beer: Beer
}

export default class BeerVue extends React.Component<Props> {


  render() {

    return (
      <li>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.beer.name}
            </Typography>
          </CardContent>
        </Card>
      </li>);
  }
}