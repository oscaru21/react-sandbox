import Alert from "../components/layout/Alert";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div className="m-5">
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
