import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));
const HomePage = lazy(() => import('../pages/Home/Home'));

export default function App() {

  return (
    <Suspense fullback={<p>Load page...</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/contacts' element={<Contacts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ Suspense>
  );
};