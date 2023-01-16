import { ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import client from './api/client';
import HomePage from './pages';
import GroupPurchasePage from './pages/group-purchase';
import LoginPage from './pages/login';
import ProductDetailPage from './pages/product-detail';
import SignUpPage from './pages/sign-up';
// import Login from './pages/test';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'detail', element: <ProductDetailPage /> },
      { path: 'group-purchase', element: <GroupPurchasePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'sign-up', element: <SignUpPage /> },
      // { path: 'test', element: <Login name='준혁' /> },
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
