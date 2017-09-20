import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem, Nav, NavLink, navTitle} from 'reactstrap';

export default class BaseLayout extends React.Component {
  render(){
    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "180%"
    }
    return (
      <div style={{backgroundColor: 'gray'}} className="container">
          <div className="container">
           <Navbar color="faded" light toggleable>
             <NavbarToggler right />
             <NavbarBrand ><Link style={navTitle} to="/">SplashPage</Link></NavbarBrand>
             <Collapse navbar>
               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink ><Link to="/home">Home</Link></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink ><Link to="/about">About</Link></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink ><Link to="/portfolio">Portfolio</Link></NavLink>
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
        {this.props.children}
        <footer style={{backgroundColor: 'gray'}} className="container">
          <span className="footer-title">Portfolio Daily Project</span>
        </footer>
      </div>
    )
  }

}
