import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEsineet, deleteEsine, addEsine } from '../../actions/esineActions';

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
                 <ListGroup style={{ paddingBottom: '2rem' }}>
                    <TransitionGroup className="shopping-list">
                        { listanEsineet.map(({ _id, esineenNimi }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className="esine">
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        style={{ marginRight: '0.5rem' }}
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
