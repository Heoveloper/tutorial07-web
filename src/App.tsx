import { ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import client from './api/client';
import HomePage from './pages';
import NoticePage from './pages/notice';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'notice', element: <NoticePage /> },
    ],
  },
]);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export default App;
