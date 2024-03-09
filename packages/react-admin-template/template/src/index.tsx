import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import router from './routes';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
