import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Jumbotron} from 'reactstrap';

export default class Home extends React.Component {
  render(){
    return(
      <div className="container">
        <Jumbotron>
           <h1 className="display-3">This is home</h1>
           <p className="lead">This is a react app built as a class project to show off a mock portfolio</p>
           <hr className="my-2" />
           <p className="lead">
           <Button color="seconary"><Link to="/portfolio">Check out my portfolio</Link></Button>
           </p>
        </Jumbotron>
      </div>
    )
  }
}
