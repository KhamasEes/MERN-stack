import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid'; // Väliaikainen
import { connect } from 'react-redux';
import { getEsineet, deleteEsine, addEsine } from '../actions/esineActions';
import PropTypes from 'prop-types';


 class ShoppingList extends Component {
    
    componentDidMount() {
        this.props.getEsineet();
    }
    
    onDeleteClick = (id) => {
        this.props.deleteEsine(id);
    };

    render() {
        
        const { listanEsineet } = this.props.listaesine;
    
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { listanEsineet.map(({ _id, esineenNimi }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times; 
                                    </Button>
                                    { esineenNimi }
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
    );
  }
}

ShoppingList.propTypes = {
    getEsineet: PropTypes.func.isRequired,
    listaesine: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    listaesine: state.listaesine
});

export default connect(mapStateToProps, { getEsineet, deleteEsine, addEsine })(ShoppingList);
