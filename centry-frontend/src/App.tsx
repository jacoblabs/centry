import React, { useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './HomePage'
import ViewPage from './ViewPage'
import {
  IDocumentService,
  IDocumentRepository,
} from './features/document/types'
import { DocumentService } from './features/document/DocumentService'
import { MockDocumentRepository } from './features/document/MockDocumentRepository'
import HomeNav from './HomeNav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

function App() {
  // DI
  const documentRepository: IDocumentRepository = new MockDocumentRepository()
  const documentService: IDocumentService = new DocumentService({
    documentRepository,
  })

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
          <ViewPage documentService={documentService} />
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
