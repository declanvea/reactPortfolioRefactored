import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem, Nav, navTitle} from 'reactstrap';
import '../styles/App.css';

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
             <NavbarBrand><NavLink style={navTitle} exact to="/" activeStyle={{color:'green'}}>SplashPage</NavLink></NavbarBrand>
             <Collapse navbar>
               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink style={{margin:'5px'}} to="/home" activeClassName="selected">Home</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink style={{margin:'5px'}} to="/about" activeClassName="selected">About</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink style={{margin:'5px'}} to="/portfolio" activeClassName="selected">Portfolio</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink style={{margin:'5px'}} to="/contact" activeClassName="selected">Contact</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink style={{margin:'5px'}} to="/references" activeClassName="selected">References</NavLink>
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
