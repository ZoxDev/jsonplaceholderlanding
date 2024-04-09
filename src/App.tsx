import LandingPage from './views/LandingPage';
import CommentView from './views/CommentsView';
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
        <Route path="/comments/:id" element={<CommentView />} />
      </>,
    ),
  );

  // Just return the router provider
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
