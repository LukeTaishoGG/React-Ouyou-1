import { Link } from 'react-router-dom'
import { useUsers, loadImg } from './User'
const UserPage = () => {
  const { users, loading, error } = useUsers()
  if (loading) {
    return <img src={loadImg} />
  }
  if (error) {
    return <p>エラー : {error}</p>
  }
  return (
    <div className="user-page-parent">
      <div className="userName">
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <p>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default UserPage
