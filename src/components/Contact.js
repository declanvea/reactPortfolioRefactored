import React from 'react';
import { Jumbotron } from 'reactstrap';


export default class Contact extends React.Component {
  render(){
    const flex ={
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      flexWrap:'no wrap'
    }
    return(
      <div className="container">
        <Jumbotron>
        <div style={flex}>
          <h1 className="display-3">Kam Sane</h1>
          <img  src="http://images.contentful.com/7h71s48744nc/Mrogg4fBAGwMemCcMAW88/5e1a00440dbbf944a4e319325bda2d04/hot-rod.jpg" alt="sam"/>
          <p className="lead">Contact Me!</p>
          </div>
          <hr className="my-2" />
          <p>Here are a few ways to reach me:</p>
          <p className="lead">
            <ul style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <li style={{listStyle: 'none'}}><a href="https://mail.google.com">kamSane@gmail.com</a></li>
              <li style={{listStyle: 'none'}}><a href="https://www.facebook.com/thehotrodmovie/">Facebook</a></li>
              <li style={{listStyle: 'none'}}><a href="https://github.com/aspidites">GitHub</a></li>
              <li style={{listStyle: 'none'}}><a href="">317-867-5309</a></li>
            </ul>
          </p>
        </Jumbotron>
    </div>
    )
  }
}
