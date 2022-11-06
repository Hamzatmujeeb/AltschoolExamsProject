import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './routes/root';
import CustomHook from './routes/CustomHook';
import UseReducer from './routes/UseReducer';
import ErrorBoundary from './components/ErrorBoundary';
import PageNotFound from './routes/PageNotFound';

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorBoundary><Root /></ErrorBoundary>,
  },
  {
    path: "/custom-hook",
    element: <ErrorBoundary><CustomHook /></ErrorBoundary>,
  },
  {
    path: "/use-reducer",
    element: <ErrorBoundary><UseReducer /></ErrorBoundary>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
