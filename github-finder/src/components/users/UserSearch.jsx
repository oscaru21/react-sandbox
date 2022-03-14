import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import githubReducer from "../../context/github/GithubReducer";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 mx-5">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="flex">
              <input
                type="text"
                placeholder="Search"
                className="input flex-auto w-full rounded-r-none bg-gray-200 input-lg text-black"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="flex-initial btn btn-accent btn-lg  w-36 rounded-l-none"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (<div>
        <button className="btn btn-ghost btn-lg text-sm" onClick={clearUsers}>Clear</button>
      </div>)}
      
    </div>
  );
}

export default UserSearch;
