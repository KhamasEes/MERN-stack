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
                        <NavbarBrand href="/" className="navbrand">Listoja ja kaikkea</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="grid-wrapper ml-auto" navbar>
 
                                <NavItem  className="grid-top" id="grid-item1">
                                    <NavLink href="https://github.com/KhamasEes"> GitHab 1</NavLink>
                                </NavItem>

                                <NavItem className="grid-left" id="grid-item2">
                                    <NavLink href="https://github.com/KhamasEes" > GitHeb 2</NavLink>
                                </NavItem>

                                <NavItem className="grid-right" id="grid-item3">
                                    <NavLink href="https://github.com/KhamasEes" > GitHib 3</NavLink>
                                </NavItem>

                                <NavItem  className="grid-bottom" id="grid-item9">
                                    <NavLink href="https://github.com/KhamasEes"> GitHöb 9</NavLink>
                                </NavItem> 
                                             
                                <Nav className="grid-container ml-auto" navbar>

                                    <NavItem  className="grid-item" id="grid-item4">
                                        <NavLink href="https://github.com/KhamasEes"> GitHob 4</NavLink>
                                    </NavItem>

                                    <NavItem className="grid-item" id="grid-item5">
                                        <NavLink href="https://github.com/KhamasEes" > GitHub 5</NavLink>
                                    </NavItem>

                                    <NavItem className="grid-item" id="grid-item6">
                                        <NavLink href="https://github.com/KhamasEes" > GitHyb 6</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item7">
                                        <NavLink href="https://github.com/KhamasEes"> GitHåb 7</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item8">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 8</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item10">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 10</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item11">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 11</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item12">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 12</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item13">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 13</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item14">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 14</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item15">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 15</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item16">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 16</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item17">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 17</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item18">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 18</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item19">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 19</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item20">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 20</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item21">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 21</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item22">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 22</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item23">
                                        <NavLink href="https://github.com/KhamasEes"> GitHob 23</NavLink>
                                    </NavItem>

                                    <NavItem className="grid-item" id="grid-item24">
                                        <NavLink href="https://github.com/KhamasEes" > GitHub 24</NavLink>
                                    </NavItem>

                                    <NavItem className="grid-item" id="grid-item25">
                                        <NavLink href="https://github.com/KhamasEes" > GitHyb 25</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item26">
                                        <NavLink href="https://github.com/KhamasEes"> GitHåb 26</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item27">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 27</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item28">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 28</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item29">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 29</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item30">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 30</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item31">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 31</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item32">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 32</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item33">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 33</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item34">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 34</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item35">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 35</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item36">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 36</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item37">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 37</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item38">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 38</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item39">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 39</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item40">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 40</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item41">
                                        <NavLink href="https://github.com/KhamasEes"> GitHob 41</NavLink>
                                    </NavItem>

                                    <NavItem className="grid-item" id="grid-item42">
                                        <NavLink href="https://github.com/KhamasEes" > GitHub 42</NavLink>
                                    </NavItem>

                                    <NavItem className="grid-item" id="grid-item43">
                                        <NavLink href="https://github.com/KhamasEes" > GitHyb 43</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item44">
                                        <NavLink href="https://github.com/KhamasEes"> GitHåb 44</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item45">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 45</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item46">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 46</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item47">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 47</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item48">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 48</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item49">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 49</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item50">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 50</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item51">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 51</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item52">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 52</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item153">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 53</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item54">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 54</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item55">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 55</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item56">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 56</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item57">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 57</NavLink>
                                    </NavItem>

                                    <NavItem  className="grid-item" id="grid-item58">
                                        <NavLink href="https://github.com/KhamasEes"> GitHäb 58</NavLink>
                                    </NavItem>                    
                                </Nav>

                            </Nav>

                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}

export default AppNavbar;