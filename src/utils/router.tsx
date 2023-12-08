import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/Home';
import SearchPage from '../pages/Search';
import InsightsPage from '../pages/Insights';
import Settings from '../pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'insights',
        element: <InsightsPage />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);
