import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'; // from Reactstrapistä listää https://reactstrap.github.io/components/alerts/

class AppNavbar extends Component {

        
    state = {
        isOpen: false
    }

    // Ei tartte bindia kuun tekee = () => {}

    toggle = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Listoja ja kaikkea</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="grid-container ml-auto" navbar>
 
                                <NavItem  className="grid-item" id="item1">
                                    <NavLink href="https://github.com/KhamasEes"> GitHab </NavLink>
                                </NavItem>

                                <NavItem className="grid-item" id="grid-item2">
                                    <NavLink href="https://github.com/KhamasEes" > GitHeb </NavLink>
                                </NavItem>

                                <NavItem className="grid-item" id="grid-item3">
                                    <NavLink href="https://github.com/KhamasEes" > GitHib </NavLink>
                                </NavItem>

                                <NavItem  className="grid-item" id="grid-item4">
                                    <NavLink href="https://github.com/KhamasEes"> GitHob </NavLink>
                                </NavItem>

                                <NavItem className="grid-item" id="grid-item5">
                                    <NavLink href="https://github.com/KhamasEes" > GitHub </NavLink>
                                </NavItem>

                                <NavItem className="grid-item" id="grid-item6">
                                    <NavLink href="https://github.com/KhamasEes" > GitHyb </NavLink>
                                </NavItem>

                                <NavItem  className="grid-item" id="grid-item7">
                                    <NavLink href="https://github.com/KhamasEes"> GitHåb </NavLink>
                                </NavItem>

                                <NavItem  className="grid-item" id="grid-item8">
                                    <NavLink href="https://github.com/KhamasEes"> GitHäb </NavLink>
                                </NavItem>

                                <NavItem  className="grid-item" id="grid-item9">
                                    <NavLink href="https://github.com/KhamasEes"> GitHöb </NavLink>
                                </NavItem> 
                                                    
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}

export default AppNavbar;

