import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './UserPage.css'
import './UserDetail.css'
import Layout from './Layout'
import UserPage from './UserPage'
import UserDetail from './UserDetail'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserPage />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
