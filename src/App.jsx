import Products from './pages/Products';
import About from './pages/About';
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import ContactLayout from './layouts/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import Error from './components/Error';
import Jobs, { jobsLoader } from './pages/Jobs';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import NotFound from './components/NotFound';
import JobsLayout from './layouts/JobsLayout';
import JobDetails, { jobDetailsLoader } from './components/JobDetails';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={jobDetailsLoader}
            errorElement={<Error />}
          />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
