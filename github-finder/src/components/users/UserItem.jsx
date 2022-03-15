import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-lg bg-base-200">
      <div className="card-body flex-row items-center space-x-4 ">
        <div className="avatar">
          <div className="w-20 mask mask-hexagon">
            <img src={avatar_url} alt="Profile pic" />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="card-title">{login}</h2>
          <div className="card-actions justify-start">
            <Link to={`/user/${login}`}>
              <button className="btn btn-primary-ghost btn-xs capitalize ">View Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
