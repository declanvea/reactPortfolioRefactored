import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Portfolio extends React.Component {
  render(){
    const center = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }
    const image = {
      marginTop: '5px',
      marginBottom: '5px',
      width: '80%',

    }
    return(
      <div className="container">
        <Jumbotron fluid>
          <Container fluid style={center}>
            <h1 className="display-3">Sample Portfolio</h1>
              <div className='center'>
                  <img style={image} src="http://m.img.brothersoft.com/win8/b9/b93769fd-142e-42bd-9cf0-08862d58a8b9_screen0.jpg" alt="online stock market project"/>
                  <img style={image} src="https://s.tmimgcdn.com/scr/57600/photographer-portfolio-website-template_57646-big.jpg?width=768&height=476" alt="online portfolio picture"/>
              </div>
            <Button color="danger"><Link to="/home">Back to Home</Link></Button>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
