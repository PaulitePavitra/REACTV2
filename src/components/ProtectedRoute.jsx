import { Navigate } from 'react-router-dom'
import CookieManager from '../utils/CookieManager'

const ProtectedRoute = ({ element }) => {
  const cookieMgr = new CookieManager()
  const isLoggedIn = cookieMgr.getCookie('isLoggedIn') === 'true'

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return element
}

export default ProtectedRoute
