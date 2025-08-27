import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import {Provider} from "react-redux";
import store from './store/store.js';
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
    <Provider store={store}>
    <App />
    </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
