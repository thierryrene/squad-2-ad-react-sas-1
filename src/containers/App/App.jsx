import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from '../../store';

import './App.scss';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Routes from '../../routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div data-testid="app">
          <Router>
            <Navbar />

            <Routes />

            <Footer />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
