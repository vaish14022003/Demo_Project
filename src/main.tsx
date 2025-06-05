import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { startOrderSimulation } from './features/restaurants/utils/demoOrderSimulator';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Start simulating orders after app is mounted
startOrderSimulation();
