import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text);
      dispatch({type: 'GET_USERS', payload: users})
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
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
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg text-sm" onClick={() => dispatch({ type: "CLEAR_USERS"})}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
