import React from "react";
import {Row,Container} from "react-bootstrap"
import logo from "./img/logo.png";
import cart_icon from "./img/cart.png"
import user_img from "./img/user.png"
import Dropdown from 'react-bootstrap/Dropdown';
import social_icon from "./sub-EL/social";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Header extends React.Component{
    render(){
        return(
            <div class="header p-4">
                <Container className="container-lg ">
                    <Row className="header-el">
                        {social_icon()}
                        <div className="navbar navigation">
                            <Router>
                                <Row><Link className="nav-link" to="/">Home</Link></Row>
                                <Row><Link className="nav-link"to="/about">About</Link></Row>
                                <Row><img className="nav-link" src={logo} alt="" /></Row>
                                <Row><Link className="nav-link" to="/contact">Contact</Link></Row>
                            </Router>
                        </div>
                        <div className="navbar cart-icon">
                            <div className="cart">
                                <img src={cart_icon} alt="" />
                                <span>1</span>
                            </div>
                            <div class = "user">
                                <Dropdown className="user_option">
                                    <Dropdown.Toggle className="i_user_option">
                                    <img src={user_img} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item id ="option" value ="login" href="/">Log in</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;