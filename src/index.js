
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);