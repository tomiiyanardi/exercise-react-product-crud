import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Header from './components/Header/Header';

const Router = React.lazy(() => import('./components/Router'));

function App() {
  return (
    <React.Suspense fallback={<Spinner animation="border" />}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App
