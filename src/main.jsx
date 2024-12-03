import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './App.css'
import ServicesShow from './ServicesShow.jsx';
import ServiceDesc1 from './Components/ServiceDesc1.jsx';
import ServiceDesc2 from './Components/ServiceDesc2.jsx';
import ServiceDesc3 from './Components/ServiceDesc3.jsx';
import ServiceDesc4 from './Components/ServiceDesc4.jsx';
import ServiceDesc5 from './Components/ServiceDesc5.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "services",
    element: <ServicesShow />
  },
  {
    path: "service1",
    element: <ServiceDesc1 />
  },
  {
    path: "service2",
    element: <ServiceDesc2/>
  },
  {
    path: "service3",
    element: <ServiceDesc3/>
  },
  {
    path: "service4",
    element: <ServiceDesc4/>
  }
  ,
  {
    path: "service5",
    element: <ServiceDesc5/>
  }
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionRevalidation: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
