import React from 'react';
import loadable from '@loadable/component';

// https://github.com/ReactTraining/react-router/blob/v6.0.0-alpha.4/docs/advanced-guides/migrating-5-to-6.md#use-useroutes-instead-of-react-router-config

const NotFound = () => <div>NotFound</div>;

const Home = loadable(() => import('../../../pages/home'));

export const routes = [
  // These are the same as the props you provide to <Route>
  { path: '/', element: <Home /> },

  { path: '*', element: <NotFound /> },
];
