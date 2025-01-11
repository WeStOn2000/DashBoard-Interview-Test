import ReactDOM from 'react-dom/client';
// Import Provider to wrap the app with the Redux store
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import App from './App';

// Using Material-UI, imported Roboto font for consistent styling
import '@fontsource/roboto';

/**
 * The entry point for our React application.
 * It renders the App component into the #root element in index.html.
 * The entire app is wrapped with the Redux Provider to enable global state management.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
); 