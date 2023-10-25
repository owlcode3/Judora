import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'
import './index.css'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <RouterProvider router={router} />
    </PrismicProvider>
  </React.StrictMode>
)