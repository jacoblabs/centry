import React, { useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './HomePage'
import ViewPage from './ViewPage'
import HomeNav from './HomeNav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

function App() {
  // React query
  const apolloClient = useMemo(() => new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  }), [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <HomeNav />
          <HomePage />
        </>
      ),
    },
    {
      path: '/:id',
      element: (
        <>
          <HomeNav />
          <ViewPage />
        </>
      ),
    },
  ])

  // UI
  return (
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </React.StrictMode>
  )
}

export default App
