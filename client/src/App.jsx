import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminCommunity, AdminDashboard } from './pages/admin-view'
import { Login, Register } from './pages/auth'
import { DevHome, DevDesginLibrary } from './pages/dev-view'
import AuthChecker from './components/common/check-auth'
import UnAuthPage from './pages/unath-page'
import NotFound from './pages/not-found'

const App = () => {

  const user = {
    role: "admin"
  };
  const isAuthenticated = true;
  return (
    <div className='flex flex-col overflow-hidden'>
      <Routes>
        <Route path='/auth'>
          <Route path='login' element={
            <AuthChecker user={user} isAuthenticated={isAuthenticated}>
              <Login />
            </AuthChecker>
          }
          />
          <Route path='register' element={
            <AuthChecker user={user} isAuthenticated={isAuthenticated}>
              <Register />
            </AuthChecker>
          }
          />
        </Route>

        <Route path='/admin'>
          <Route path='dashboard' element={
            <AuthChecker user={user} isAuthenticated={isAuthenticated}>
              <AdminDashboard />
            </AuthChecker>
          }
          />
          <Route path='community' element={
            <AuthChecker user={user} isAuthenticated={isAuthenticated}>
              <AdminCommunity />
            </AuthChecker>
          }
          />
        </Route>

        <Route path='/dev'>
          <Route path='home' element={
            <AuthChecker user={user} isAuthenticated={isAuthenticated}>
              <DevHome />
            </AuthChecker>
          }
          />

          <Route path='ddl' element={
            <AuthChecker user={user} isAuthenticated={isAuthenticated}>
              <DevDesginLibrary />
            </AuthChecker>
          }
          />
        </Route>
        <Route path='/unauth-page' element={<UnAuthPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App