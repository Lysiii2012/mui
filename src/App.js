import React from "react"; 
import AppContent from './components/AppContent/AppContent'
import store from './store';
import { Provider } from 'react-redux'
import './App.css';
 
function App() { 
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
