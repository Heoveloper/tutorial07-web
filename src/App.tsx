import { ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import client from './api/client';
import HomePage from './pages';
import AdminPage from './pages/admin';
import GroupPurchasePage from './pages/group-purchase';
import LoginPage from './pages/login';
import MyPage from './pages/my-page';
import PrivacyPolicyPage from './pages/privacy-policy';
import ProductDetailPage from './pages/product-detail';
import ProductDetailAdminPage from './pages/product-detail-admin';
import SignUpPage from './pages/sign-up';
import TermsOfUsePage from './pages/terms-of-use';
// import Login from './pages/test';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'detail/:id', element: <ProductDetailPage /> },
      { path: 'detail/:id/admin', element: <ProductDetailAdminPage /> },
      { path: 'group-purchase', element: <GroupPurchasePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'sign-up', element: <SignUpPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'my-page', element: <MyPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-of-use', element: <TermsOfUsePage /> },
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
