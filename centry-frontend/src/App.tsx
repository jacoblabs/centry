import React, { useState, useEffect } from 'react'
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
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Document } from '../types/document';

function App() {
  // State
  const [documents, setDocuments] = useState<Document[]>([])

  // DI
  const documentRepository: IDocumentRepository = new MockDocumentRepository()
  const documentService: IDocumentService = new DocumentService({
    documentRepository,
  })

  // Hooks: mounted
  useEffect(() => {
    const init = async () => {
      try {
        const fetchedDocuments = await documentService.getDocumentList({
          page: 1,
        })
        setDocuments(fetchedDocuments)
      } catch (e) {
        console.error(e)
      }
    }

    init()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <HomeNav />
      <HomePage documents={documents} />
    </>,
    },
    {
      path: "/:id",
      element: <>
      <HomeNav />
      <ViewPage documentService={documentService} />
    </>,
    },
  ]);
  
  // UI
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
}

export default App
