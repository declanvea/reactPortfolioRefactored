import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron, Button} from 'reactstrap';

export default class Home extends React.Component {
  render(){
    return(
      <div className="container">
        <Jumbotron>
            <img src="https://resources.stuff.co.nz/content/dam/images/1/4/6/v/5/5/image.related.StuffLandscapeSixteenByNine.620x349.19a8rl.png/1453233859568.jpg)" alt="coder"/>
            <p className="lead"></p>
            <hr className="my-2" />
            <p className="lead">A little about me:</p>
            <p className="lead">words...followed by......</p>
            <p className="lead">........</p>
            <p className="lead">........</p>
            <p className="lead">........</p>
            <p className="lead">........</p>
            <p className="lead">....more words</p>
            <p className="lead">
            </p>
        </Jumbotron>
    </div>
    )
  }
}
