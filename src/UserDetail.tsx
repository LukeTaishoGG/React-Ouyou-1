import { useParams } from "react-router-dom";
import { useUser, loadImg } from "./User";
const UserDetail = () => {
  const { userId } = useParams<{ userId: string }>();
  const { user, loading, error } = useUser(userId ?? "");
  if (loading) return <div><img src={loadImg} /></div>;
  if (error || !user) return <div>ユーザー取得失敗</div>;
  return (
    <div className="users-contents">
      <div className="user-profile">
        <h2>{user.name}</h2>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>
          Address: {user.address.suite}, {user.address.street}, {user.address.city}
        </div>
        <div>Company: {user.company.name}</div>
      </div>
    </div>
  );
};
export default UserDetail;