import React, { Component } from 'react';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/esine/ShoppingList';
import EsineModal from './components/esine/EsineModal';
import PersonList from './components/person/PersonList';
import PersonModal from './components/person/PersonModal';

import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container className="PersonList">  
            <PersonModal />
            <PersonList />
          </Container>
          <hr style={{ margin: '1rem', backgroundColor: 'black' }} />
          <Container className="ShoppingList">
            <EsineModal />
            <ShoppingList />
          </Container>
          <Container className="ShoppingList">
            <EsineModal />
            <ShoppingList />
          </Container>
          <Container className="ShoppingList">
            <EsineModal />
            <ShoppingList />
          </Container>
          <Container className="ShoppingList">
            <EsineModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
