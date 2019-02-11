import React, { Component } from 'react';
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

import { connect } from 'react-redux';
import { addEsine } from '../actions/esineActions';
import uuid from 'uuid';

class EsineModal extends Component {
    state = {
        modal: false,
        esineenNimi: ''
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
        const uusiEsine = {
            esineenNimi: this.state.name // Tämä tulee kohdasta name: name 
        };
        console.log('Uusi esine: ' + uusiEsine.esineenNimi);
        

        // Add esine via addEsine action 
        this.props.addEsine(uusiEsine);
           // Closin modal
        this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={ this.toggle }
                >Add Item</Button>
            
                <Modal
                    isOpen = { this.state.modal }
                    toggle = { this.toggle }
                >
                    <ModalHeader toggle={ this.toggle } > Add to shopping list </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Esine</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }} block
                                >Add Item
                                </Button>

                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>

        );
    }

}

const mapsStateToProps = state => ({
    item: state.item
});


export default connect(mapsStateToProps, { addEsine })( EsineModal );
