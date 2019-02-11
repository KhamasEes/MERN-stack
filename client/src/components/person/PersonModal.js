import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPerson } from '../../actions/personActions';

import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

 class PersonModal extends Component {

    state = {
        modal: false,
        firstName: '',
        lastName: '',
        address: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value  })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: {
                streetAddress: this.state.streetAddress,
                postalCode: this.state.postalCode,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country
            }
        };

        this.props.addPerson(newPerson);

        this.toggle();

    };

    render() {


        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem', marginTop: '1rem' }}
                    onClick={ this.toggle }
                >Add Person </Button>

                <Modal
                    isOpen = { this.state.modal }
                    toggle = { this.toggle }
                >
                
                <ModalHeader toggle={ this.toggle } className="ModalHeader" > Add person to the list </ModalHeader>
                <ModalBody className="ModalBody">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            {/* FIRST NAME */}
                            <Label for="firstName" className="ModalFormLabel" >First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                onChange={this.onChange}
                                className="ModalFormInput"

                            />

                        </FormGroup>
                        <FormGroup>

                            {/* LAST NAME */}
                            <Label for="lastName">Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                onChange={this.onChange}
                                className="ModalFormInput"
                            />

                        </FormGroup>
                        <FormGroup>

                            {/* STREET ADDRESS */}
                            <Label for="streetAddress">Street Address</Label>
                            <Input
                                type="text"
                                name="streetAddress"
                                id="streetAddress"
                                placeholder="Street Address"
                                onChange={this.onChange}

                            />

                        </FormGroup>
                        <FormGroup>


                            {/* POSTAL CODE */}
                            <Label for="postalCode">Postal Code</Label>
                            <Input
                                type="text"
                                name="postalCode"
                                id="postalCode"
                                placeholder="Postal Code"
                                onChange={this.onChange}

                            />

                        </FormGroup>
                        <FormGroup>


                            {/* CITY */}
                            <Label for="city">City</Label>
                            <Input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="City"
                                onChange={this.onChange}

                            />

                        </FormGroup>
                        <FormGroup>

                            {/* STATE */}
                            <Label for="state">State</Label>
                            <Input
                                type="text"
                                name="state"
                                id="state"
                                placeholder="State"
                                onChange={this.onChange}

                            />

                        </FormGroup>
                        <FormGroup>

                            {/* COUNTRY */}
                            <Label for="country">Country</Label>
                            <Input
                                type="text"
                                name="country"
                                id="country"
                                placeholder="Country"
                                onChange={this.onChange}

                            />                                                                                                                        

                        </FormGroup>

                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                            >Add Person
                            </Button>
 
                    </Form>
                </ModalBody>


                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    firstName: state.firstName,
    lastName: state.lastName,
    address: {
        streetAddress: state.streetAddress,
        postalCode: state.postalCode,
        city: state.city,
        state: state.state,
        country: state.country
     }
});

export default connect(mapStateToProps, { addPerson } )( PersonModal );
