import React from 'react';
import logo from './logo.svg';
import './App.css';
import GatewayRoutes from './app/routes/GatewayRoutes';
import ErrorBoundary from './app/services/handleErrors/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
    
      <GatewayRoutes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
