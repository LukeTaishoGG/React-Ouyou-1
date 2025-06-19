import { Outlet } from 'react-router-dom'
const Layout = () => (
  <div className="user-page-parent">
    <h1 className="title">ユーザー</h1>
    <Outlet />
  </div>
)
export default Layout
