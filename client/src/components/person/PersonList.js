import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPersons, deletePerson, addPerson } from '../../actions/personActions';

 class PersonList extends Component {

  componentDidMount() {
     
    this.props.getPersons();
  }

  onDeleteClick = (id) => {
       this.props.deletePerson(id);
 };


  render() {
    
    const { listPersons } = this.props.listPerson;
  
     

    return (
            <Container>
               <ListGroup style={{ paddingBottom: '2rem' }}> 
                    <TransitionGroup className="persons-list">
                        { listPersons.map(({ _id, firstName, lastName, address }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className="person">
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        style={{ marginRight: '0.5rem' }}
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times; 
                                    </Button>
                                    <br />
                                    { firstName } {' '} { lastName} <br />
                                    { address.streetAddress } <br />
                                    { address.postalCode } {' '}
                                    { address.city } <br />
                                    { address.state } {' '}
                                    { address.country } 
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
    );
  }
}

PersonList.propTypes = {
  getPersons: PropTypes.func.isRequired,
  listPerson: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    listPerson: state.listperson
});

export default connect(mapStateToProps, { getPersons, addPerson, deletePerson })(PersonList);
