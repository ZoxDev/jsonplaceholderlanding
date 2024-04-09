
import LandingPage from './views/LandingPage';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
      </>,
    ),
  );

  // Just return the router provider
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
