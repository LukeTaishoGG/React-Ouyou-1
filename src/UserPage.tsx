import { Link } from 'react-router-dom';
import { useUsers, loadImg } from './User';
const UserPage = () => {
  const { users, loading, error } = useUsers();
  return (
    <div className="user-page-parent">
      <div className="userName">
        {loading ? (
          <img src={loadImg} />
        ) : error ? (
          <p>エラー : {error}</p>
        ) : (
          <div className="user-list">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <p>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default UserPage;
